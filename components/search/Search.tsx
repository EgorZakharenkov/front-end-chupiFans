import React, { useState } from "react";
import styles from "./style.module.scss";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { searchAnimes } from "@/redux/slices/Anime";
import { useRouter } from "next/navigation";

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>(""); // Initialize state for search input
  const dispatch = useAppDispatch(); // Redux dispatch hook
  const router = useRouter(); // Next.js router hook

  // Event handler for form submission
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    dispatch(searchAnimes(search)); // Dispatch search action
    router.push("/"); // Navigate to home page after search
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearch}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder={"Поиск..."}
          className={styles.searchInput}
        />
        <Button className={styles.searchButton}>Найти</Button>{" "}
      </form>
    </div>
  );
};

export { Search };
