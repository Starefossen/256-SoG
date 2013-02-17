var vhdl = {};
var signals = {};

/*--------------------------------------------
| instr
---------------------------------------------*/
signals.instr = {
  x: 0, y: 25,
  points: [[950, 0]],
  width: 4,
  color: '#4096EE'
};
signals.addr0 = {
  x: 550, y: 25,
  points: [[0, 275]],
};
signals.r0 = {
  x: 525 + 25, y: 25 + 125,
  points: [[-125, 0], [0, -25]],
};
signals.addr1 = {
  x: 525 + 50, y: 25,
  points: [[0, (300-25)]],
};
signals.addr2 = {
  x: 525 + 75, y: 25,
  points: [[0, (300-25)]],
};
signals.addr3 = {
  x: 525 + 100, y: 25,
  points: [[0, (300-25)]],
};
signals.instr_alu = {
  x: 0+950, y: 25,
  points: [[0, 625], [-325, 0]]
}

/*--------------------------------------------
| id
---------------------------------------------*/
vhdl.id = {
  x: 150, y: 75, h: 50, w: 300,
  label: {
    text : 'INSTRUCTION DECODER',
    x: 70, y: 0
  }
};
signals.set_state = {
  x: 150, y: 125,
  points: [[-75, 0], [0, 50], [25, 0]],
};
signals.com_in = {
  x: 150, y: 100,
  points: [[-100, 0], [0, 350], [50, 0]],
};
signals.swap = {
  x: 150, y: 75,
  points: [[-125, 0], [0, 550]],
};
signals.swap_sMux = {
  x: 150, y: 550,
  points: [[-125, 0]],
};
signals.swap_sReg = {
  x: 150, y: 625,
  points: [[-125, 0]],
};
signals.alu_const = {
  x: 450, y: 100,
  points: [[525, 0], [0, 375], [-150, 0]],
};
signals.reg_write = {
  x: 450, y: 125,
  points: [[200, 0], [0, 175]],
};
signals.com = {
  x: 375, y: 125,
  points: [[0, 375]],
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
signals.state_out = {
   x: 150, y: 175,
  points: [[850, 0]],
};
signals.state_id = {
  x: 200, y: 175,
  points: [[0, -50]],
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
signals.nIn_stMux = {
  x: 0, y: 500,
  points: [[100, 0], [0, -25]],
  width: 4
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
  x: 175, y: 525,
  points: [[0, -25],[-25, 0],[0, -25]],
  width: 4
};

/*--------------------------------------------
| sReg
---------------------------------------------*/
vhdl.sReg = {
  x: 150, y: 625, h: 50, w: 50,
  label: {
    text : 'S REG',
    x: 5, y: 0
  }
};
signals.sReg_sMux = {
  x: 150, y: 625,
  points: [[0, -50]],
  width: 4
};
signals.stepIn_sReg = {
  x: 0, y: 650,
  points: [[150, 0]]
};
signals.sIn_sReg = {
  x: 0, y: 675,
  points: [[150, 0]],
  width: 4
};
signals.alu_sReg = {
  x: 200, y: 600,
  points: [[0, 25]],
  width: 4
};

/*--------------------------------------------
| alu
---------------------------------------------*/
vhdl.alu = {
  x: 550, y: 600, h: 50, w: 75,
  label: {
    text : 'ALU',
    x: 25, y: 0
  }
};
signals.alu = {
  x: 550, y: 625,
  points: [[-325, 0], [0, -25], [-25, 0]],
  width: 4
};
signals.alu_sMux = {
  x: 200, y: 600,
  points: [[0, -25]],
  width: 4
};

/*--------------------------------------------
| reg
---------------------------------------------*/
vhdl.reg = {
  x: 525, y: 300, h: 125, w: 150,
  label: {
    text : 'REGISTER BANK',
    x: 23, y: 0
  }
};
signals.reg1_alu = {
  x: 750, y: 350,
  points: [[0, 255], [-125, 0]],
  width: 4
}
signals.nIn_in0 = {
  x: 125, y: 425,
  points: [[0, -100], [400, 0]],
  width: 4,
};
signals.sIn_in1 = {
  x: 0, y: 350,
  points: [[525, 0]],
  width: 4
};
signals.eIn_in2 = {
  x: 0, y: 375,
  points: [[525, 0]],
  width: 4
};
signals.wIn_in3 = {
  x: 0, y: 400,
  points: [[525, 0]],
  width: 4
};
signals.reg0_com0 = {
  x: 675, y: 325,
  points: [[50, 0], [0, -50], [-250, 0], [0, 225]],
  width: 4
};
signals.reg1 = {
  x: 675, y: 350,
  points: [[75, 0]],
  width: 4
}
signals.reg1_com1 = {
  x: 750, y: 350,
  points: [[0, -100], [-300, 0], [0, 250]],
  width: 4
};
signals.reg2 = {
  x: 675, y: 375,
  points: [[100, 0]],
  width: 4
}
signals.reg2_com2 = {
  x: 775, y: 375,
  points: [[0, -150], [-350, 0], [0, 275]],
  width: 4
};
signals.reg3_com3 = {
  x: 675, y: 400,
  points: [[125, 0], [0, -200], [-400, 0], [0, 300]],
  width: 4
};


/*--------------------------------------------
| aMux
---------------------------------------------*/
vhdl.aMux = {
  x: 775, y: 450, h: 50, w: 50,
  label: {
    text : 'A MUX',
    x: 5, y: 0
  }
};
signals.instr_aMux = {
  x: 825, y: 25,
  points: [[0, 425]],
  width: 4
};
signals.reg2_aMux = {
  x: 775, y: 375,
  points: [[0, 75]],
  width: 4
}
signals.aMux_alu = {
  x: 800, y: 500,
  points: [[0, 125], [-175, 0]],
  width: 4
}

/*--------------------------------------------
| com
---------------------------------------------*/
vhdl.com = {
  x: 250, y: 500, h: 100, w: 250,
  label: {
    text : 'COMMUNICATION',
    x: 65, y: 0
  }
};

/*--------------------------------------------
| TO STATE REGISTER
---------------------------------------------*/


/*--------------------------------------------
| REG TO COM
---------------------------------------------*/

/*--------------------------------------------
| COM IN
---------------------------------------------*/
signals.com0 = {
  x: 250+100, y: 300+25,
  points: [[0, 500-300-25]],
  width: 4
};
signals.com1 = {
  x: 250+75, y: 300+50,
  points: [[0, 500-300-50]],
  width: 4
};
signals.com2 = {
  x: 250+50, y: 300+75,
  points: [[0, 500-300-75]],
  width: 4
};
signals.com3 = {
  x: 250+25, y: 300+100,
  points: [[0, 500-300-100]],
  width: 4
};

/*--------------------------------------------
| STATE MUX
---------------------------------------------*/
signals.stMux_st = {
  x: 125, y: 325,
  points: [[0, -125]],
};