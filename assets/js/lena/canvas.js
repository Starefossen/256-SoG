var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

context.font = "10pt monaco"; 

// Draw line function
var line = function(x, y, width, color) {
  context.lineWidth = width || 2
  context.strokeStyle = color || '#C0C0C0'
  context.fillStyle = color || '#C0C0C0'
  context.beginPath();
  context.moveTo(x, y);
  return {
    x : x, y : y,
    draw : function(x, y) {
      this.x += x;
      this.y += y;
      context.lineTo(this.x, this.y);
      return this;
    },
    finish : function() {
      context.stroke();
      // arrow
    }
  }
}

// Set instruction
var instr = function( enable, mask, op ) {
  var ctrl = "#FF1A00",
      disa = "#C0C0C0",
      word = "#4096EE",
      data = "#36393D";
  
  // instr
  signals.enable.color    = (enable ? ctrl : disa);
  signals.mask.color      = (enable && mask ? ctrl : disa);
  signals.op.color        = (enable ? data : disa);
  signals.r0.color        = (enable && mask ? data : disa);
  signals.addr0.color     = (enable ? data : disa);
  signals.addr1.color     = (enable ? data : disa);
  signals.addr2.color     = (enable ? data : disa);
  signals.addr3.color     = (enable && (op === 'SEND' || op === 'FWRD' || op === 'RESW') ? data : disa);
  signals.instr_alu.color = (enable && (op === 'ALU_R' || op === 'ALU_I' || op === 'SWAP') ? data : disa);
  
  // id
  signals.set_state.color = disa;
  signals.com_in.color    = (enable && (op === 'FWRD' || op === 'RESW') ? ctrl : disa);
  signals.com.color       = (enable && (op === 'FWRD' || op === 'SEND') ? ctrl : disa);
  signals.alu_const.color = (enable && op === 'ALU_I' ? ctrl : disa);
  signals.reg_write.color = (enable && op !== 'SEND' ? ctrl : disa);
  
  // state reg
  signals.state_out.color = (enable ? '#000000' : disa);
  signals.state_id.color  = (enable && mask ? ctrl : disa);
  signals.stMux_st.color  = (enable ? data : disa);
  
  // swap
  signals.swap.color      = (enable && op === 'SWAP' ? ctrl : disa);
  signals.swap_sReg.color = (enable && op === 'SWAP' ? ctrl : disa);
  signals.swap_sMux.color = (enable && op === 'SWAP' ? ctrl : disa);
  
  // stMux
  signals.nIn_stMux.color = (enable && (op === 'FWRD' || op === 'RESW') ? word : disa);
  signals.sMux_stMux.color= (enable && (op === 'ALU_R' || op === 'ALU_I' || op === 'SWAP') ? word : disa);

  // sReg
  signals.sReg_sMux.color = (enable && op === 'SWAP' ? word : disa);
  signals.alu_sReg.color  = (enable && op === 'SWAP' ? word : disa);
  signals.stepIn_sReg.color=(enable && op === 'STEP' ? ctrl : disa);
  signals.sIn_sReg.color  = (enable && op === 'STEP' ? word : disa);
  signals.sReg_sOut.color = (enable && op === 'STEP' ? word : disa);
  
  // alu
  signals.alu.color       = (enable && (op === 'ALU_R' || op === 'ALU_I' || op === 'SWAP') ? word : disa);
  signals.alu_sMux.color  = (enable && (op === 'ALU_R' || op === 'ALU_I') ? word : disa);
  
  // reg in
  signals.nIn_in0.color   = (enable && op !== 'SEND' ? word : disa);
  signals.sIn_in1.color   = (enable && (op === 'FWRD' || op === 'RESW') ? word : disa);
  signals.eIn_in2.color   = (enable && (op === 'FWRD' || op === 'RESW') ? word : disa);
  signals.wIn_in3.color   = (enable && (op === 'FWRD' || op === 'RESW') ? word : disa);
  
  // reg out
  signals.reg0_com0.color = (enable && op === 'SEND' ? word : disa);
  signals.reg1_com1.color = (enable && op === 'SEND' ? word : disa);
  signals.reg1.color      = (enable && !(op === 'FWRD' || op === 'RESW') ? word : disa);
  signals.reg2_com2.color = (enable && op === 'SEND' ? word : disa);
  signals.reg2.color      = (enable && !(op === 'FWRD' || op === 'RESW' || op === 'ALU_I') ? word : disa);
  signals.reg3_com3.color = (enable && op === 'SEND' ? word : disa);
  
  // com in
  signals.nIn_com0.color  = (enable && op === 'FWRD' ? word : disa);
  signals.sIn_com1.color  = (enable && op === 'FWRD' ? word : disa);
  signals.eIn_com2.color  = (enable && op === 'FWRD' ? word : disa);
  signals.wIn_com3.color  = (enable && op === 'FWRD' ? word : disa);

  // com out
  signals.com0_eOut.color = (enable && (op === 'FWRD' || op === 'SEND') ? word : disa);
  signals.com1_sOut.color = (enable && (op === 'FWRD' || op === 'SEND') ? word : disa);
  signals.com2_wOut.color = (enable && (op === 'FWRD' || op === 'SEND') ? word : disa);
  signals.com3_nOut.color = (enable && (op === 'FWRD' || op === 'SEND') ? word : disa);
  
  // aMux
  signals.instr_aMux.color= (enable && op === 'ALU_I' ? word : disa);
  signals.reg1_alu.color  = (enable && (op === 'ALU_R' || op === 'ALU_I' || op === 'SWAP') ? word : disa);
  signals.reg2_aMux.color = (enable && (op === 'ALU_R' || op === 'SWAP') ? word : disa);
  signals.aMux_alu.color  = (enable && (op === 'ALU_R' || op === 'ALU_I' || op === 'SWAP') ? word : disa)
  //4096EE

  redraw();
}

var redraw = function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  draw();
}

// Draw lena canvas
var draw = function() {
  
  // VHDL Components
  context.lineWidth = 2;
  for (var obj in vhdl) {
    obj = vhdl[obj];
    context.fillStyle = "#ffffff";
    context.strokeStyle = "#000000"
    context.fillRect(obj.x, obj.y, obj.w, obj.h);
    context.strokeRect(obj.x, obj.y, obj.w, obj.h);
    if (typeof obj.label !== 'undefined') {
      context.fillStyle = "#000000";
      context.fillText(obj.label.text, obj.x + obj.label.x, obj.y + (obj.h/2) + 5 + obj.label.y);
    }
  }
  
  // Signals
  for (var s in signals) {
    var l = line(signals[s].x, signals[s].y, signals[s].width, signals[s].color);
    for (var p = 0; p < signals[s].points.length; p++) {
      l.draw(signals[s].points[p][0], signals[s].points[p][1]);
    }
    l.finish();
  }
  context.stroke();
}