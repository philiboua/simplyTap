/* Inspired from Bootstrap the grid system has been elaborated for three media breakpoint
  - Mobile : the grid contains 4 columns
  - tablet : the grid contains 6 columns
  - desktop : the grid contains 12 columns
*/

interface IGrid {
  sm: {
    sm1: string, 
    sm2: string,
    sm3: string,
    sm4: string,
  },
  md: {
    md1: string,
    md2: string,
    md3: string,
    md4: string,
    md5: string,
    md6: string,
  }
  lg:{
    lg1: string,
    lg2: string,
    lg3: string,
    lg4: string,
    lg5: string,
    lg6: string,
    lg7: string,
    lg8: string,
    lg9: string,
    lg10: string,
    lg11: string,
    lg12: string,
  }
}

export const colSizes: IGrid = {
  sm: {
    sm1: "25%",
    sm2: "50%",
    sm3: "75%",
    sm4: "100%",
  },
  md: {
    md1: "16.666666667%",
    md2: "33.333333333%",
    md3: "50%",
    md4: "66.666666667%",
    md5: "83.333333333%",
    md6: "100%",
  },
  lg: {
    lg1: "08.333333333%",
    lg2: "16.666666667%",
    lg3: "25%",
    lg4: "33.333333333%",
    lg5: "41.666666667%",
    lg6: "50%",
    lg7: "58.333333333%",
    lg8: "66.666666667%",
    lg9: "75%",
    lg10: "83.333333333%",
    lg11: "91.666666667%",
    lg12: "100%",
  },
}
