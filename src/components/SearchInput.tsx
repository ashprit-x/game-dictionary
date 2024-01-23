import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {

  return (
    <form onSubmit={(event) => {
        event.preventDefault();
    }}>
        <InputGroup>
          <InputLeftElement children={<BsSearch/>}/>
          <Input borderRadius={20} placeholder="Search games..."></Input>
        </InputGroup>
    </form>
  );
};

export default SearchInput;
