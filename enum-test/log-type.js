import Enum from 'enum';

const LogType = new Enum({
  '0' : 'error',
  '1' : 'info',
  '2' : 'warn'
});

export default LogType;
