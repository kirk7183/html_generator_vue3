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
    <button @click="applyHeading" class="buttonClass">
      <font-awesome-icon :icon="['fas', 'heading']" />
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

    <!-- LINE HEIGHT -->
    <div class="wrapperIcon flexRow">
      <button
        disabled
        class="buttonClass buttonDisabled"
        style="display: inline-block; vertical-align: middle"
      >
        <!-- @click="applyLineHeight()" -->
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
            ? 'width:35px; padding: 0 5px; '
            : 'width:2px; padding:0; ',
        ]"
      >
        <button class="fs16" @click="applyLineHeight('plus')">
          <font-awesome-icon :icon="['fa-solid', 'plus']" />
        </button>
        <button class="fs16" @click="applyLineHeight('minus')">
          <font-awesome-icon :icon="['fa-solid', 'minus']" />
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
    applyLineHeight() {
      //   function changeFont(plusMinus) {
      var sel = window.getSelection(); // Gets selection

      if (sel.rangeCount) {
        // Creates a new element, and insert the selected text with the chosen font inside
        var e = document.createElement("span");
        e.innerHTML = sel.toString();
        // console.log(e.childNodes);
        // console.log(sel);
        // console.log(e.innerHTML);
        // https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
        var range = sel.getRangeAt(0);
        console.log(e.style.letterSpacing);
        // e.style.letterSpacing = "1px;";
        range.deleteContents(); // Deletes selected text…
        range.insertNode(e); // … and inserts the new element at its place
        console.log(this.$el.querySelector("span"));

        // let selectedTxT = window.getSelection().focusNode.parentNode.style;
        // let selectedTxT = window.getSelection().focusNode.parentNode.style;
        // let getStyle = selectedTxT.letterSpacing;
        // console.log(selectedTxT);
        // console.log(e.style.letterSpacing);
        // if (plusMinus === "plus") {
        //   let parseLetterSpacing = parseInt(e.style.letterSpacing, 10);
        //   //   console.log(parseLetterSpacing);
        //   e.style.letterSpacing = 1 + parseLetterSpacing + "px;";
        // } else {
        //   e.style = "letter-spacing:unset;";
        // }
        // console.log(e.style.letterSpacing);
      }

      //   let selectedTxT = window.getSelection().focusNode.parentNode.style;
      //   let selectedTxT = window.getSelection().focusNode.parentElement.style;
      //   const getSelectedText = () => window.getSelection();
      //   console.log(getSelectedText());
      //   var parentNode = document.getElementById("textTitle").parentElement;
      //   console.log(parentNode);
      //   var e = document.createElement("span");
      //   e.innerHTML = getSelection();
      //   var numberOnly = parseInt(selectedTxT.letterSpacing, 10);
      //   if (plusMinus === "plus") {
      //     selectedTxT.letterSpacing = numberOnly + 1 + "px"; //when click on +
      //   } else {
      //     selectedTxT.letterSpacing = numberOnly - 1 + "px"; //when click on -
      //   }
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
}
.buttonDisabled:hover {
  border: unset;
  cursor: unset;
}
.fs16 {
  font-size: 16px;
}
</style>