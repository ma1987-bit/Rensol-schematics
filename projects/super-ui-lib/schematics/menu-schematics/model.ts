export interface FileModel {
    companyname:string;
    headmenutitle1: string;
    headmenutitle2:string;
    headmenu1:SubField1[];
    headmenu2:SubField2[];
  }
  

  
  export interface SubField1 {
    submenu1: string;
    submenu2:string,
    submenu3:string,
    submenu4:string,
  }
  export interface SubField2 {
    submenu1: string;
    submenu2:string,
    submenu3:string,
    submenu4:string,
  }