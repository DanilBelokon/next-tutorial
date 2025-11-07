export function getHelloMessage() {
  return {message: "Hellow from shared module"};
}

export function postHelloMessage(name) {
  return {message: `Hellow ${name} from shared module (POST)`};
}
