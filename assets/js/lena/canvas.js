var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

context.font = "10pt monaco"; 

// Draw line function
var line = function(x, y, width, color) {
  context.lineWidth = width || 2
  context.strokeStyle = color || '#000000'
  context.fillStyle = color || '#000000'
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
  signals.set_state.color = '#C0C0C0'
  signals.com_in.color    = (enable && op === 'COM' ? '#FF1A00' : '#C0C0C0')
  signals.com.color       = (enable && op === 'COM' ? '#FF1A00' : '#C0C0C0')
  signals.alu_const.color = (enable && op === 'ALU' ? '#FF1A00' : '#C0C0C0')
  signals.reg_write.color = (enable && op === 'ALU' ? '#FF1A00' : '#C0C0C0')

  signals.swap.color      = (enable && op === 'SWP' ? '#FF1A00' : '#C0C0C0')
  signals.swap_sReg.color = (enable && op === 'SWP' ? '#FF1A00' : '#C0C0C0')
  signals.swap_sMux.color = (enable && op === 'SWP' ? '#FF1A00' : '#C0C0C0')


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