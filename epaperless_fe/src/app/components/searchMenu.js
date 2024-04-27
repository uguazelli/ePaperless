import styles from "@/app/page.module.css";
import { Input } from "antd";
const { Search } = Input;

const SearchMenu = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className={styles.searchContainer}>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </div>
  );
};

export default SearchMenu;
