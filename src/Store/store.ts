import { StateCreator, create } from "zustand";
import { PersistOptions, persist } from "zustand/middleware";

// Define interfaces for your data types
interface FilteringData {
  data: string;
  search: string;
  sortingData: string;
  changeSearch: (search: string) => void;
  changeData: (dataValue: string) => void;
  changeDataSorting: (value: string) => void;
}

interface NavbarData {
  data: string;
  changeNavbar: (value: string) => void;
}

export interface CartItem {
  title:string;
  image:string;
  id: number;
  category:string;
  description:string;
  price:number;
  rating:{
    rate:number,
    count:number
  },
  quantity: number;
}

interface UserData {
  carts: CartItem[];
  checkout: CartItem[];
}

interface AuthData {
  data: UserData;
  changeAuth: (value: UserData) => void;
  addToCarts: (value: CartItem) => void;
  removeToCarts: (id: number) => void;
  addCheckOut: (value: CartItem) => void;
  removeCheckOut: (id: number) => void;
}

interface LogoutData {
  data: object;
  changeLogout: (value: object) => void;
}

type FilterData = (
  config: StateCreator<FilteringData>,
  options: PersistOptions<FilteringData>
) => StateCreator<FilteringData>;

type NavbarDataType = (
  config: StateCreator<NavbarData>,
  options: PersistOptions<NavbarData>
) => StateCreator<NavbarData>;

type AuthDataType = (
  config: StateCreator<AuthData>,
  options: PersistOptions<AuthData>
) => StateCreator<AuthData>;

type LogoutDataType = (
  config: StateCreator<LogoutData>,
  options: PersistOptions<LogoutData>
) => StateCreator<LogoutData>;

export const useFilter = create<FilteringData>(
  (persist as FilterData)((set): FilteringData => ({
    data: "all",
    sortingData: "",
    search: "",
    changeSearch: (dataValue) => set({ search: dataValue }),
    changeData: (dataValue) => set({ data: dataValue }),
    changeDataSorting: (value) => set({ sortingData: value }),
  }), { name: "filter_data" })
);

export const useNavbar = create<NavbarData>(
  (persist as NavbarDataType)((set): NavbarData => ({
    data: "Home",
    changeNavbar: (value) => set({ data: value }),
  }), { name: "Navbar_data" })
);

export const useAuth = create<AuthData>(
  (persist as AuthDataType)((set): AuthData => ({
    data: { carts: [], checkout: [] },
    changeAuth: (value) => set({ data: value }),
    addToCarts: (value) => set((state) => {
      const findValue = state.data.carts.findIndex((item) => item.id === value.id);
      if (findValue !== -1) {
        state.data.carts[findValue].quantity = value.quantity;
      } else {
        state.data.carts.push(value);
      }
      return { ...state };
    }),
    removeToCarts: (id) => set((state) => {
      state.data.carts = state.data.carts.filter((item) => item.id !== id);
      return { ...state };
    }),
    addCheckOut: (value) => set((state) => {
      const findData = state.data.checkout.findIndex((item) => item.id === value.id);
      if (findData !== -1) {
        state.data.checkout[findData].quantity = value.quantity;
      } else {
        state.data.checkout.push(value);
      }
      return { ...state };
    }),
    removeCheckOut: (id) => set((state) => {
      state.data.checkout = state.data.checkout.filter((data) => data.id !== id);
      return { ...state };
    })
  }), { name: "user" })
);

export const useLogout = create<LogoutData>(
  (persist as LogoutDataType)((set): LogoutData => ({
    data: {},
    changeLogout: (value) => set({ data: value })
  }), { name: "LogOut" })
);
