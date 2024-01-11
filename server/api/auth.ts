import type { User } from "~/data/interfaces";

export default defineEventHandler(async (event) => {
  const { _id } = await readBody(event);

  if (!_id)
    return {
      success: false,
      data: null,
      message: "nera tokeno",
    };

  const data: User | null = await userSchema.findById({ _id });

  if (!data)
    return {
      success: false,
      data: null,
      message: "Vartotojas nerastas",
    };

  data.password = "";

  return { success: true, data: data, message: "" };
});
