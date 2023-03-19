import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBox = ({ value, onChange }) => {
  return (
    <InputGroup className="mb-3 searchbox">
      <Form.Control
        placeholder="Find your food"
        aria-label="Find your food"
        aria-describedby="basic-addon"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <Button variant="outline-secondary" id="button-addon">
        Find Food
      </Button>
    </InputGroup>
  );
};

export default SearchBox;
