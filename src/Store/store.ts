import { StateCreator, create } from "zustand";
import { PersistOptions, persist } from "zustand/middleware";

type FilteringData = {
  data: string;
  search:string;
  changeSearch:(search:string)=>void;
  changeData: (dataValue: string) => void;
};

type NavbarData = {
  data: string;
  changeNavbar: (value: string) => void;
};

type authData = {
  data: object;
  changeAuth: (value: object) => void;
  addToCarts: (value:object) => void;
  removeToCarts: (id:number) => void;
  addCheckOut:(value:object, addOrMinus?:string) =>void;
  removeCheckOut:(id:number)=>void;
};

type logOutData={
  data:object,
  changeLogout:(value:object)=>void;
}

type FilterData = (
  config: StateCreator<FilteringData>,
  options: PersistOptions<FilteringData>
) => StateCreator<FilteringData>;

type NavbarDataType = (
  config: StateCreator<NavbarData>,
  options: PersistOptions<NavbarData>
) => StateCreator<NavbarData>;

type authDataType = (
  config: StateCreator<authData>,
  options: PersistOptions<authData>
) => StateCreator<authData>;

type logOutDataType=(
  config:StateCreator<logOutData>,
  options:PersistOptions<logOutData>
) =>StateCreator<logOutData>



export const useFilter = create<FilteringData>(
  (persist as FilterData)((set: any): FilteringData => ({
    data: "all",
    search:"",
    changeSearch:(dataValue)=>set({search:dataValue}),
    changeData: (dataValue) => set({ data: dataValue }),
  }), { name: "filter_data" })
);

export const useNavbar = create<NavbarData>(
  (persist as NavbarDataType)((set: any): NavbarData => ({
    data: "Home",
    changeNavbar: (value) => set({ data: value }),
  }), { name: "Navbar_data" })
);

export const useAuth = create<authData>(
  (persist as authDataType)((set: any): authData => ({
    data: {},
    changeAuth: (value) => set({ data: value }),
    addToCarts: (value) => set((state)=>{
      const findValue=state.data.carts.findIndex((item)=>item.id===value.id)
      if(findValue !== -1){
        state.data.carts[findValue].quantity=state.data.carts[findValue].quantity+value.quantity
      }else{
        state.data.carts.push(value)
      }
      return {...state}
    }),
    removeToCarts:(id)=>set((state)=>{
      state.data.carts=state.data.carts.filter((item)=>item.id!==id)
      return {...state}
    }),
    addCheckOut:(value, addOrMinus)=>set((state)=>{
      const findData=state.data.checkout.findIndex((item)=>item.id===value.id)
      console.log(value.quantity)
      if(findData!==-1){
        state.data.checkout[findData].quantity=value.quantity
      } else{
        state.data.checkout.push(value)
      }
      return {...state}
    }),
    removeCheckOut:(id)=>set((state)=>{
      state.data.checkout=state.data.checkout.filter((data)=>data.id!==id)
      return {...state}
    })
  }), { name: "user" })
);

export const useLogout=create<logOutData>(
  (persist as logOutDataType)((set:any):logOutData=>({
    data:{},
    changeLogout:(value)=>set({ data:value})
  }),{ name:"LogOut" })
)




