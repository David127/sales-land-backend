const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Lead = sequelize.define('Lead', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'El campo id no puede estar vacío'
      }
    }
  },
  campana: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: 'El campo campana debe ser un número entero'
      },
      notEmpty: {
        msg: 'El campo campana es obligatorio'
      }
    }
  },
  cod_proveedor: {
    type: DataTypes.STRING(5),
    allowNull: false,
    validate: {
      len: {
        args: [5, 5],
        msg: 'El campo cod_proveedor debe tener exactamente 5 caracteres'
      },
      notEmpty: {
        msg: 'El campo cod_proveedor es obligatorio'
      }
    }
  },
  fecha_captacion: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^\d{8} \d{2}:\d{2}$/,
        msg: 'El campo fecha_captacion debe tener el formato "aaaammdd hh:mm"'
      },
      notEmpty: {
        msg: 'El campo fecha_captacion es obligatorio'
      }
    }
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'El campo nombre no puede estar vacío'
      }
    }
  },
  ape1: DataTypes.STRING(50),
  ape2: DataTypes.STRING(50),
  nif: DataTypes.STRING(50),
  telefono: {
    type: DataTypes.STRING(9),
    allowNull: false,
    validate: {
      is: {
        args: /^[6789]\d{8}$/,
        msg: 'El campo telefono debe tener 9 dígitos y comenzar con 6, 7, 8 o 9'
      },
      notEmpty: {
        msg: 'El campo telefono es obligatorio'
      }
    }
  },
  email: {
    type: DataTypes.STRING(150),
    validate: {
      isEmail: {
        msg: 'El campo email debe ser una dirección de correo válida'
      }
    }
  },
  direccion: DataTypes.STRING(50),
  codigo_postal: {
    type: DataTypes.STRING(5),
    validate: {
      len: {
        args: [5, 5],
        msg: 'El campo codigo_postal debe tener exactamente 5 caracteres'
      }
    }
  },
  poblacion: DataTypes.STRING(50),
  provincia: DataTypes.STRING(50),
  acepta1: {
    type: DataTypes.ENUM('SI', 'NO'),
    allowNull: false,
    validate: {
      isIn: {
        args: [['SI', 'NO']],
        msg: 'El campo acepta1 solo puede ser "SI" o "NO"'
      }
    }
  },
  acepta2: {
    type: DataTypes.ENUM('SI', 'NO'),
    validate: {
      isIn: {
        args: [['SI', 'NO']],
        msg: 'El campo acepta2 solo puede ser "SI" o "NO"'
      }
    }
  },
  acepta3: {
    type: DataTypes.ENUM('SI', 'NO'),
    validate: {
      isIn: {
        args: [['SI', 'NO']],
        msg: 'El campo acepta3 solo puede ser "SI" o "NO"'
      }
    }
  },
  num1: DataTypes.INTEGER,
  num2: DataTypes.INTEGER,
  num3: DataTypes.INTEGER,
  dual1: {
    type: DataTypes.ENUM('SI', 'NO'),
    validate: {
      isIn: {
        args: [['SI', 'NO']],
        msg: 'El campo dual1 solo puede ser "SI" o "NO"'
      }
    }
  },
  dual2: {
    type: DataTypes.ENUM('SI', 'NO'),
    validate: {
      isIn: {
        args: [['SI', 'NO']],
        msg: 'El campo dual2 solo puede ser "SI" o "NO"'
      }
    }
  },
  dual3: {
    type: DataTypes.ENUM('SI', 'NO'),
    validate: {
      isIn: {
        args: [['SI', 'NO']],
        msg: 'El campo dual3 solo puede ser "SI" o "NO"'
      }
    }
  },
  variable1: DataTypes.STRING(50),
  variable2: DataTypes.STRING(50),
  variable3: DataTypes.STRING(50),
  memo: {
    type: DataTypes.TEXT,
    validate: {
      len: {
        args: [0, 8000],
        msg: 'El campo memo no debe exceder los 8000 caracteres'
      }
    }
  },
  fecha: {
    type: DataTypes.STRING,
    validate: {
      is: {
        args: /^\d{8}$/,
        msg: 'El campo fecha debe tener el formato "yyyyMMdd"'
      }
    }
  },
  hora: {
    type: DataTypes.STRING,
    validate: {
      is: {
        args: /^\d{2}:\d{2}$/,
        msg: 'El campo hora debe tener el formato "hh:mm"'
      }
    }
  },
  foto1: DataTypes.STRING(500),
  foto2: DataTypes.STRING(500),
  comercial: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'El campo comercial no puede estar vacío'
      }
    }
  },
  centro: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'El campo centro no puede estar vacío'
      }
    }
  }
}, {
  tableName: 'leads',
  timestamps: false
});

module.exports = Lead;