export interface HelloWorldProps {
    userName: string;
    lang: string;
}
const user: HelloWorldProps = {
      userName : "Esteban",
      lang: "Typescript"
}
  
export {user as props};