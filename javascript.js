Blockly.JavaScript['carattertiche_elemento'] = function(block) {
  var value_numero = Blockly.JavaScript.valueToCode(block, 'NUMERO', Blockly.JavaScript.ORDER_ATOMIC);
  var value_testo = Blockly.JavaScript.valueToCode(block, 'TESTO', Blockly.JavaScript.ORDER_ATOMIC);
  var value_colore = Blockly.JavaScript.valueToCode(block, 'COLORE', Blockly.JavaScript.ORDER_ATOMIC);
  var nome = "parte_" + value_numero;
  var code = 'document.getElementById("' + nome + '").innerHTML = "' + value_testo + '";\n';
	code += 'document.getElementById("' + nome + '").style.color = "' + value_colore + '";\n';
  return code;
};

Blockly.JavaScript['numero'] = function(block) {
  var code = parseFloat(block.getFieldValue('NUM'));
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['stringa'] = function(block) {
  var text_text = block.getFieldValue('stringa');
  var code = text_text;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['caratteristiche_logo'] = function(block) {
  var value_altezza = Blockly.JavaScript.valueToCode(block, 'ALTEZZA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_larghezza = Blockly.JavaScript.valueToCode(block, 'LARGHEZZA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_al = Blockly.JavaScript.valueToCode(block, 'AL', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = 'document.getElementById("logo").style.height = "' + value_altezza + 'px";\n';
	code += 'document.getElementById("logo").style.width = "' + value_larghezza + 'px";\n';
	code += 'document.getElementById("logo").alt = "' + value_al + '";\n';
  return code;
};

Blockly.JavaScript['titolo_documento'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'document.title = "' + value_name + '";\n';
  return code;
};

Blockly.JavaScript['color_blue'] = function(block) {
  var colour_blue = block.getFieldValue('blue');
  var code = '#3333FF';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_red'] = function(block) {
  var colour_red = block.getFieldValue('red');
  var code = '#FF3333';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_green'] = function(block) {
  var colour_green = block.getFieldValue('green');
  var code = '#33FF33';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_black'] = function(block) {
  var colour_black = block.getFieldValue('black');
  var code = '#000000';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_white'] = function(block) {
  var colour_white = block.getFieldValue('white');
  var code = '#FFFFFF';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

