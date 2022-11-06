import React from "react";
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const PostFilter = ({ onUpdateFilter, filter }) => {

    return (
        <ButtonGroup>
            <Button variant={filter ? "outline-secondary" : "info" }
                onClick={() => onUpdateFilter('')}>
                Все
            </Button>
            <Button variant={!filter ? "outline-secondary" : "info" }
                onClick={() => onUpdateFilter('like')}>
                Понравилось
            </Button>
        </ButtonGroup>
    )
}

export default PostFilter