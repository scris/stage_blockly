Blockly.Blocks['carattertiche_elemento'] = {
  init: function() {
    this.setHelpUrl('http://www.w3schools.com/tags/tag_div.asp');
    this.setColour(65);
    this.appendDummyInput()
        .appendField("Caratteristiche elemento");	  
    this.appendValueInput("NUMERO")
        .setCheck("Number")
        .appendField("numero");
    this.appendValueInput("TESTO")
        .setCheck("String")
        .appendField("testo");
    this.appendValueInput("COLORE")
        .appendField("colore");
    this.setTooltip('');
  }
};

Blockly.Blocks['numero'] = {
  init: function() {
    this.setHelpUrl('http://www.w3schools.com/html');
    this.setColour(200);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0',
        Blockly.FieldTextInput.numberValidator), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip('');
  }
};

Blockly.Blocks['stringa'] = {
  init: function() {
    this.setHelpUrl('http://www.w3schools.com/html');
    this.setColour(300);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("il tuo testo"), "stringa");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};


Blockly.Blocks['caratteristiche_logo'] = {
  init: function() {
    this.setHelpUrl('http://www.w3schools.com/html/html_images.asp');
    this.setColour(210);
    this.appendDummyInput()
        .appendField("Caratteristiche Logo");
    this.appendValueInput("ALTEZZA")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Altezza");
    this.appendValueInput("LARGHEZZA")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Larghezza");
    this.appendValueInput("AL")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Testo alternativo");
    this.setTooltip('');
  }
};

Blockly.Blocks['titolo_documento'] = {
  init: function() {
    this.setHelpUrl('http://www.w3schools.com/jsref/prop_doc_title.asp');
    this.setColour(290);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Titolo della pagina HTML");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_blue'] = {
  init: function() {
    this.setHelpUrl('http://html-color-codes.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Blue:")
        .appendField(new Blockly.FieldColour("#3333ff"), "blue");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_red'] = {
  init: function() {
    this.setHelpUrl('http://html-color-codes.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Red:")
        .appendField(new Blockly.FieldColour("#ff3333"), "red");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_green'] = {
  init: function() {
    this.setHelpUrl('http://html-color-codes.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Green:")
        .appendField(new Blockly.FieldColour("#33ff33"), "green");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_black'] = {
  init: function() {
    this.setHelpUrl('http://html-color-codes.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Black:")
        .appendField(new Blockly.FieldColour("#000000"), "black");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_white'] = {
  init: function() {
    this.setHelpUrl('http://html-color-codes.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("White:")
        .appendField(new Blockly.FieldColour("#ffffff"), "white");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};