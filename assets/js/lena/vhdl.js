var vhdl = {};
var signals = {};

// INSTRUCTION DECODER
vhdl.id = {
  x: 150, y: 75, h: 50, w: 300,
  label: {
    text : 'INSTRUCTION DECODER',
    x: 70, y: 0
  }
};

/*--------------------------------------------
| st
---------------------------------------------*/
vhdl.st = {
  x: 100, y: 150, h: 50, w: 50,
  label: {
    text : 'STATE',
    x: 5, y: 0
  }
};

/*--------------------------------------------
| stMux
---------------------------------------------*/
vhdl.stMux = {
  x: 100, y: 425, h: 50, w: 50,
  label: {
    text : 'ST MUX',
    x: 1, y: 0
  }
};

signals.sIn_stMux = {
  x: 0, y: vhdl.stMux.y+vhdl.stMux.h+25,
  points: [[vhdl.stMux.x, 0], [0, -25]],
  width: 4,
  color: '#4096EE'
};

/*--------------------------------------------
| sMux
---------------------------------------------*/
vhdl.sMux = {
  x: 150, y: 525, h: 50, w: 50,
  label: {
    text : 'S MUX',
    x: 4, y: 0
  }
};

signals.sMux_stMux = {
  x: vhdl.sMux.x+vhdl.sMux.w/2, y: vhdl.sMux.y,
  points: [[0, -25],[-25, 0],[0, -25]],
  width: 4
};

/*--------------------------------------------
| sReg
---------------------------------------------*/
vhdl.sReg = {
  x: vhdl.sMux.x, y: 625, h: 50, w: 50,
  label: {
    text : 'S REG',
    x: 5, y: 0
  }
};

signals.sReg_sMux = {
  x: vhdl.sReg.x, y: vhdl.sReg.y,
  points: [[0, vhdl.sMux.y+vhdl.sMux.h-vhdl.sReg.y]],
  width: 4
};

signals.stepIn_sReg = {
  x: 0, y: vhdl.sReg.y+vhdl.sReg.h/2,
  points: [[vhdl.sReg.x, 0]]
};

signals.sIn_sReg = {
  x: 0, y: vhdl.sReg.y+vhdl.sReg.h,
  points: [[vhdl.sReg.x, 0]],
  width: 4
};


/*--------------------------------------------
| ALU
---------------------------------------------*/
vhdl.alu = {
  x: 550, y: 575, h: 50, w: 75,
  label: {
    text : 'ALU',
    x: 25, y: 0
  }
};

signals.alu = {
  x: vhdl.alu.x, y: vhdl.alu.y+vhdl.alu.h/2,
  points: [[vhdl.sMux.x+vhdl.sMux.w-vhdl.alu.x, 0]],
  width: 4
};

signals.alu_sMux = {
  x: vhdl.sMux.x+vhdl.sMux.w, y: vhdl.sMux.y+vhdl.sMux.h+25,
  points: [[0, -25]],
  width: 4
};

signals.alu_sReg = {
  x: vhdl.sReg.x+vhdl.sReg.w, y: vhdl.sReg.y-25,
  points: [[0, 25]],
  width: 4
};


/*--------------------------------------------
| REGISTERS
---------------------------------------------*/
vhdl.reg = {
  x: 525, y: 300, h: 125, w: 150,
  label: {
    text : 'REGISTER BANK',
    x: 23, y: 0
  }
};

// COMMUNICATION
vhdl.com = {
  x: 250, y: 450, h: 100, w: 250,
  label: {
    text : 'COMMUNICATION',
    x: 65, y: 0
  }
};

/*--------------------------------------------
| FROM INSTRUCTION DECODER
---------------------------------------------*/
signals.set_state = {
  x: vhdl.id.x, y: vhdl.id.y+vhdl.id.h,
  points: [[-((vhdl.id.x-vhdl.st.x)+25), 0], [0, ((vhdl.st.y-(vhdl.id.y+vhdl.id.h))+(vhdl.st.h/2))], [25, 0]],
  color: '#FF1A00'
};
signals.com_in = {
  x: vhdl.id.x, y: vhdl.id.y+vhdl.id.h-25,
  points: [[-((vhdl.id.x-vhdl.stMux.x)+50), 0], [0, ((vhdl.stMux.y-(vhdl.id.y+vhdl.id.h-25))+(vhdl.stMux.h/2))], [50, 0]],
  color: '#FF1A00'
};
signals.swap = {
  x: vhdl.id.x, y: vhdl.id.y+vhdl.id.h-50,
  points: [[-125, 0], [0, 550]],
  color: '#FF1A00'
};
signals.swap_sMux = {
  x: vhdl.sMux.x, y: vhdl.sMux.y+vhdl.sMux.h/2,
  points: [[-125, 0]],
  color: '#FF1A00'
};
signals.swap_sReg = {
  x: vhdl.sReg.x, y: vhdl.sReg.y,
  points: [[-125, 0]],
  color: '#FF1A00'
};
signals.alu_const = {
  x: vhdl.id.x+vhdl.id.w, y: vhdl.id.y+vhdl.id.h-25,
  points: [[525, 0], [0, 400]],
  color: '#FF1A00'
};
signals.reg_write = {
  x: vhdl.id.x+vhdl.id.w, y: vhdl.id.y+vhdl.id.h,
  points: [[200, 0], [0, (vhdl.reg.y-(vhdl.id.y+vhdl.id.h))]],
  color: '#FF1A00'
};
signals.com = {
  x: vhdl.com.x+(vhdl.com.w/2), y: vhdl.id.y+vhdl.id.h,
  points: [[0, vhdl.com.y-(vhdl.id.y+vhdl.id.h)]],
  color: '#FF1A00'
};

/*--------------------------------------------
| TO STATE REGISTER
---------------------------------------------*/
signals.state_out = {
   x: vhdl.st.x+vhdl.st.w, y: vhdl.st.y+(vhdl.st.h/2),
  points: [[1000-(vhdl.st.x+vhdl.st.w), 0]],
}
signals.state_id = {
  x: vhdl.st.x+vhdl.st.w+50, y: vhdl.st.y+(vhdl.st.h/2),
  points: [[0, -((vhdl.st.y-(vhdl.id.y+vhdl.id.h))+(vhdl.st.h/2))]],
}

/*--------------------------------------------
| IN TO REG
---------------------------------------------*/
signals.in0 = {
  x: vhdl.stMux.x+vhdl.stMux.w/2, y: vhdl.reg.y+25,
  points: [[vhdl.reg.x-vhdl.stMux.x-vhdl.stMux.w/2, 0]],
  width: 4,
  color: '#4096EE'
};
signals.in1 = {
  x: 0, y: vhdl.reg.y+50,
  points: [[vhdl.reg.x, 0]],
  width: 4,
  color: '#4096EE'
};
signals.in2 = {
  x: 0, y: vhdl.reg.y+75,
  points: [[vhdl.reg.x, 0]],
  width: 4,
  color: '#4096EE'
};
signals.in3 = {
  x: 0, y: vhdl.reg.y+100,
  points: [[vhdl.reg.x, 0]],
  width: 4,
  color: '#4096EE'
};

/*--------------------------------------------
| REG TO COM
---------------------------------------------*/
signals.out0 = {
  x: vhdl.reg.x+vhdl.reg.w, y: vhdl.reg.y+25,
  points: [[50, 0], [0, -50], [-(vhdl.reg.w+0+(vhdl.reg.x-vhdl.reg.y-vhdl.reg.w)+25), 0], [0, (vhdl.com.y-vhdl.reg.y)+25]],
  width: 4
};
signals.out1 = {
  x: vhdl.reg.x+vhdl.reg.w, y: vhdl.reg.y+50,
  points: [[75, 0], [0, -100], [-(vhdl.reg.w+25+(vhdl.reg.x-vhdl.reg.y-vhdl.reg.w)+50), 0], [0, (vhdl.com.y-vhdl.reg.y)+50]],
  width: 4
};
signals.out2 = {
  x: vhdl.reg.x+vhdl.reg.w, y: vhdl.reg.y+75,
  points: [[100, 0], [0, -150], [-(vhdl.reg.w+50+(vhdl.reg.x-vhdl.reg.y-vhdl.reg.w)+75), 0], [0, (vhdl.com.y-vhdl.reg.y)+75]],
  width: 4
};
signals.out3 = {
  x: vhdl.reg.x+vhdl.reg.w, y: vhdl.reg.y+100,
  points: [[125, 0], [0, -200], [-(vhdl.reg.w+75+(vhdl.reg.x-vhdl.reg.y-vhdl.reg.w)+100), 0], [0, (vhdl.com.y-vhdl.reg.y)+100]],
  width: 4
};

/*--------------------------------------------
| COM IN
---------------------------------------------*/
signals.com0 = {
  x: vhdl.com.x+100, y: vhdl.reg.y+25,
  points: [[0, vhdl.com.y-vhdl.reg.y-25]],
  width: 4,
  color: '#4096EE'
};
signals.com1 = {
  x: vhdl.com.x+75, y: vhdl.reg.y+50,
  points: [[0, vhdl.com.y-vhdl.reg.y-50]],
  width: 4,
  color: '#4096EE'
};
signals.com2 = {
  x: vhdl.com.x+50, y: vhdl.reg.y+75,
  points: [[0, vhdl.com.y-vhdl.reg.y-75]],
  width: 4,
  color: '#4096EE'
};
signals.com3 = {
  x: vhdl.com.x+25, y: vhdl.reg.y+100,
  points: [[0, vhdl.com.y-vhdl.reg.y-100]],
  width: 4,
  color: '#4096EE'
};

/*--------------------------------------------
| STATE MUX
---------------------------------------------*/
signals.st_new = {
  x: vhdl.stMux.x+vhdl.stMux.w/2, y: vhdl.stMux.y,
  points: [[0, -(vhdl.stMux.y-vhdl.st.y-vhdl.st.h)]],
  width: 4,
  color: '#4096EE'
};

/*--------------------------------------------
| INSTRUCTION
---------------------------------------------*/
signals.inst = {
  x: 0, y: 25,
  points: [[800, 0]],
  width: 4
};
signals.addr0 = {
  x: vhdl.reg.x + 25, y: signals.inst.y,
  points: [[0, (vhdl.reg.y-signals.inst.y)]],
};
signals.r0 = {
  x: vhdl.reg.x + 25, y: signals.inst.y + 125,
  points: [[-125, 0], [0, -25]],
};
signals.addr1 = {
  x: vhdl.reg.x + 50, y: signals.inst.y,
  points: [[0, (vhdl.reg.y-signals.inst.y)]],
};
signals.addr2 = {
  x: vhdl.reg.x + 75, y: signals.inst.y,
  points: [[0, (vhdl.reg.y-signals.inst.y)]],
};
signals.addr3 = {
  x: vhdl.reg.x + 100, y: signals.inst.y,
  points: [[0, (vhdl.reg.y-signals.inst.y)]],
};