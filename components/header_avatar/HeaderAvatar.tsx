import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const HeaderAvatar: React.FC = () => {
  return (
    <div className={styles.avatar}>
      <Link href={"/profile"}>
        <Avatar>
          <AvatarImage
            src={
              "https://avatars.dzeninfra.ru/get-zen_doc/9707955/pub_6438954d241af459e8685d95_643896271da5ab6e4835178f/scale_1200"
            }
          />
          <AvatarFallback children={"EZ"} />
        </Avatar>
      </Link>
    </div>
  );
};

export { HeaderAvatar };
