export default function log({ next, to }) {
    console.log("to : ",to.path);
  
    return next();
  }