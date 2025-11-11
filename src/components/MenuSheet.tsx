

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, Heart, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { logout } from "@/app/(auth)/login/actions";

export default async function MenuSheet() {
    const supabase = await createClient();

    const { data: { user} } = await supabase.auth.getUser();

    if (!user) {
        return null;
    }
  
        const { avatar_url , full_name } = user!?.user_metadata;
    

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-6">
        <SheetHeader className="sr-only">
          <SheetTitle>ユーザー情報</SheetTitle>
          <SheetDescription>
            ユーザー情報とメニュー情報を開示。
          </SheetDescription>
        </SheetHeader>

        {/* ヘッダーエリア */}
        <div className="flex items-center gap-5">
          <div>
            <Avatar>
              <AvatarImage src={avatar_url} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <div className="font-bold">{full_name}</div>
            <div className="text-green-500 text-sm">
              <Link href="#">アカウントを管理する</Link>
            </div>
          </div>
        </div>
        {/* メニューエリア */}
        <ul className="space-y-5">
          <li>
            <Link href={"order"} className="flex items-center gap-4">
            <Bookmark fill="bg-primary" />
              <span className="font-bold">ホーム</span>
            </Link>
          </li>
          <li>
            <Link href={"favorite"} className="flex items-center gap-4">
            <Heart fill="bg-primary" />
              <span className="font-bold">お気に入り</span>
            </Link>
          </li>
        </ul>
        <SheetFooter>
          <form >
            <Button className="w-full" formAction={ logout } >
            ログアウト
          </Button>
          </form>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
