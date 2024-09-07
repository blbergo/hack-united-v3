import { TypedPocketBase } from "@/types/pocketbase";
import PocketBase from "pocketbase";

export const pb = new PocketBase(
  "https://pocketbase.gdsccpp.dev"
) as TypedPocketBase;
