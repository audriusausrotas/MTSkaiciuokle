import { useCookie } from "nuxt/app";
import type { User } from "~/data/interfaces";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as User | null,
    users: [] as User[],
  }),

  actions: {
    async setUser(data: User) {
      this.user = data;
    },

    logout() {
      this.user = null;
      const cookie = useCookie("mtud");
      cookie.value = null;
      this.users = [];
    },

    async getAllUsers() {
      const { data: users }: any = await useFetch("/api/users");
      if (users.value.success) {
        this.users = [...users.value.data];
      }
    },

    updateUser(data: User) {
      this.users = this.users.map((user) => {
        if (user._id === data._id) return data;
        else return user;
      });
    },

    deleteUser(id: string) {
      this.users = this.users.filter((user) => user._id !== id);
    },
  },

  getters: {},
});
