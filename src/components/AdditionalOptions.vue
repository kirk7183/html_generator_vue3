<template>
  <!-- <div class="mainWrapper"> -->
  <div class="fixedDiv">
    <!-- <i class="fa-brands fa-facebook fa-2x" style="color:red"></i>
          <i class="fa-brands fa-facebook fa-2x" style="color:green"></i>
          <i class="fa-brands fa-facebook fa-2x" style="color:purple"></i>
          <i class="fa-solid fa-phone fa-1x" style="color:blue; margin:10px"></i>
          <i class="fa-solid fa-envelope fa-2x" style="color:#c1c2c4"></i> -->
    <button @click="applyBold" class="buttonClass">
      <font-awesome-icon :icon="['fas', 'bold']" />
    </button>
    <button @click="applyItalic" class="buttonClass">
      <font-awesome-icon :icon="['fas', 'italic']" />
    </button>
    <button @click="applyUnderline" class="buttonClass">
      <font-awesome-icon :icon="['fa', 'underline']" />
    </button>

    <!-- BRUSH -TEXT COLOR -->
    <div class="wrapperIcon">
      <button
        class="buttonClass"
        style="display: inline-block; vertical-align: middle"
      >
        <font-awesome-icon
          :icon="['fa', 'paintbrush']"
          style="display: inline-block"
          @click="applyPaintbrush()"
        />
      </button>
      <!-- RightArrow -->
      <button class="arrowRight" @click="ArrowMethod('brushArrow')">
        <font-awesome-icon :icon="['fa-solid', brushArrow]" />
      </button>
      <!-- /RightArrow -->
      <!-- Input HEX code or color name -->
      <input
        class="inputCustomHEXColor"
        type="text"
        v-model="custColorText"
        :style="[
          dynamicShowBrush
            ? 'width:35px; padding: 0 5px; '
            : 'width:0px; padding:0; ',
        ]"
      />
      <!-- /Input HEX code or color name -->
    </div>
    <!-- /BRUSH -TEXT COLOR -->

    <!-- LETTER SPACING -->
    <div class="wrapperIcon flexRow">
      <button
        disabled
        class="buttonClass buttonDisabled"
        style="display: inline-block; vertical-align: middle"
      >
        <font-awesome-icon :icon="['fa-solid', 'text-width']" />
      </button>
      <!-- RightArrow -->
      <button class="arrowRight" @click="ArrowMethod('letterSpacingArrow')">
        <font-awesome-icon :icon="['fa-solid', letterSpacingArrow]" />
      </button>
      <!-- /RightArrow -->
      <!-- DIV for MINUS and PLUS of LETTER SPACING-->
      <div
        class="minusAndPlus flexRow"
        :style="[
          dynamicShowLetterSpacing
            ? 'width:57px; padding: 0 5px;'
            : 'width:0px; padding:0;',
        ]"
      >
        <button class="fs16" @click="applyLetterSpacing('plus')">
          <font-awesome-icon :icon="['fa-solid', 'plus']" />
        </button>
        <button class="fs16" @click="applyLetterSpacing('minus')">
          <font-awesome-icon :icon="['fa-solid', 'minus']" />
        </button>
        <button class="fs16" @click="applyLetterSpacing('reset')">
          <font-awesome-icon :icon="['fa-solid', 'r']" />
        </button>
      </div>
      <!-- /Input HEX code or color name -->
    </div>
    <!-- /LETTER SPACING -->

    <!-- LINE HEIGHT -->
    <div class="wrapperIcon flexRow">
      <button
        disabled
        class="buttonClass buttonDisabled"
        style="display: inline-block; vertical-align: middle"
      >
        <font-awesome-icon :icon="['fa-solid', 'arrow-down-up-across-line']" />
      </button>
      <!-- RightArrow -->
      <button class="arrowRight" @click="ArrowMethod('lineHeightArrow')">
        <font-awesome-icon :icon="['fa-solid', lineHeightArrow]" />
      </button>
      <!-- /RightArrow -->
      <!-- DIV for MINUS and PLUS of LINE HEIGHT -->
      <div
        class="minusAndPlus flexRow"
        :style="[
          dynamicShowLineHeight
            ? 'width:57px; padding: 0 5px;'
            : 'width:0px; padding:0; ',
        ]"
      >
        <button class="fs16" @click="applyLineHeight('plus')">
          <font-awesome-icon :icon="['fa-solid', 'plus']" />
        </button>
        <button class="fs16" @click="applyLineHeight('minus')">
          <font-awesome-icon :icon="['fa-solid', 'minus']" />
        </button>
        <button class="fs16" @click="applyLineHeight('reset')">
          <font-awesome-icon :icon="['fa-solid', 'r']" />
        </button>
      </div>
      <!-- /Input HEX code or color name -->
    </div>
    <!-- /LINE HEIGHT -->

    <button @click="undo" class="buttonClass">
      <font-awesome-icon :icon="['fas', 'undo']" />
    </button>
    <button @click="redo" class="buttonClass">
      <font-awesome-icon :icon="['fas', 'redo']" />
    </button>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      custColorText: "",
      custLineHeight: "",
      brushArrow: "caret-left",
      lineHeightArrow: "caret-left",
      letterSpacingArrow: "caret-left",
      dynamicShowLetterSpacing: false,
      dynamicShowBrush: false,
      dynamicShowLineHeight: false,
    };
  },
  methods: {
    applyBold() {
      document.execCommand("bold");
    },
    applyItalic() {
      document.execCommand("italic");
    },
    applyHeading() {
      document.execCommand("formatBlock", false, "<h5>");
    },
    applyUnderline() {
      document.execCommand("underline");
    },
    applyPaintbrush() {
      document.execCommand("styleWithCSS", false, true);
      document.execCommand("foreColor", false, this.custColorText);
    },

    applyLetterSpacing(plusMinus) {
      let curElementStyle = window.getSelection().focusNode.parentElement.style;
      let number = parseInt(curElementStyle.letterSpacing, 10);

      //if its PLUS
      if (plusMinus === "plus") {
        if (Number.isInteger(number)) {
          number = number + 1;
        } else {
          number = 1;
        }
        //then set to style
        curElementStyle.letterSpacing = number + "px";
      }
      //if its MINUS
      if (plusMinus === "minus") {
        if (Number.isInteger(number)) {
          number = number - 1;
        } else {
          number = 1;
        }
        //then set to style
        curElementStyle.letterSpacing = number + "px";
      }
      //if its RESET
      if (plusMinus === "reset") {
        //then set to style
        curElementStyle.letterSpacing = "unset";
      }
    },
    applyLineHeight(plusMinus) {
      let curElementStyle = window.getSelection().focusNode.parentElement.style;
      let number = parseFloat(curElementStyle.lineHeight);

      console.log(number + 0.1);
      //if its PLUS
      if (plusMinus === "plus") {
        if (Number.isFinite(number)) {
          number = number + 0.1;
        } else {
          number = 1;
        }
        //then set to style
        curElementStyle.lineHeight = number;
      }
      //if its MINUS
      if (plusMinus === "minus") {
        if (Number.isFinite(number)) {
          number = number - 0.1;
        } else {
          number = 1;
        }
        //then set to style
        curElementStyle.lineHeight = number;
      }
      //if its RESET
      if (plusMinus === "reset") {
        //then set to style
        curElementStyle.lineHeight = "unset";
      }
    },
    undo() {
      document.execCommand("undo");
    },
    redo() {
      document.execCommand("redo");
    },
    ArrowMethod(arrow) {
      if (arrow === "brushArrow") {
        if (this.brushArrow === "caret-right") {
          this.brushArrow = "caret-left";
          this.dynamicShowBrush = false; //input is showed
        } else {
          this.brushArrow = "caret-right";
          this.dynamicShowBrush = true; //input is NOT showed
        }
      }
      if (arrow === "letterSpacingArrow") {
        if (this.letterSpacingArrow === "caret-right") {
          this.letterSpacingArrow = "caret-left";
          this.dynamicShowLetterSpacing = false; //input is showed
        } else {
          this.letterSpacingArrow = "caret-right";
          this.dynamicShowLetterSpacing = true; //input is NOT showed
        }
      }
      if (arrow === "lineHeightArrow") {
        if (this.lineHeightArrow === "caret-right") {
          this.lineHeightArrow = "caret-left";
          this.dynamicShowLineHeight = false; //input is showed
        } else {
          this.lineHeightArrow = "caret-right";
          this.dynamicShowLineHeight = true; //input is NOT showed
        }
      }
      // let selectedTxt = window.getSelection().focusNode.parentNode.style;
      // var numberOnly = parseInt(selectedTxt.letterSpacing, 10);
      // selectedTxt.letterSpacing = numberOnly + 1 + "px";
      // // asd.style.letterSpacing = "100px";
      // console.log(numberOnly);
    },
    // dynamicShowInput(){
    //   if (this.carpetArrow === "caret-right")
    // }
  },
};
</script>

<style scoped>
body,
* {
  margin: 0;
  padding: 0;
}
.fixedDiv {
  position: fixed;
  z-index: 1000;
  left: 5px;
  padding: 2px;
  background: white;
  border: 1px solid black;
}

.buttonClass {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 30px;
  height: 30px;
  font-size: 15px;
  background: #fff;
  border: none;
  cursor: pointer;
}
.buttonClass > svg {
  color: #000;
}
.buttonClass:hover,
.arrowRight:hover {
  border: 1px solid #c6c6c6;
}
.arrowRight {
  width: 10px;
  height: 30px;
  background: white;
  border: none;
  cursor: pointer;
}
.arrowRight > svg {
  display: inline-block;
  vertical-align: middle;
  font-size: 15px;
}
.inputCustomHEXColor,
.minusAndPlus {
  position: fixed;
  left: 52px;
  height: 27px;
  transition: width 0.5s;
}
.minusAndPlus {
  overflow: hidden;
  /* background: red; */
}
.flexRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
}
.buttonDisabled:hover {
  border: unset;
  cursor: unset;
}
.minusAndPlus > button {
  cursor: pointer;
}
.minusAndPlus > button > svg {
  width: 15px;
}
.fs16 {
  font-size: 16px;
}
</style>