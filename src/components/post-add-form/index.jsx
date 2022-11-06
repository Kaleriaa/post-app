import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import styled from "styled-components";

const PostAddForm = ({ onAdd }) => {
    const [text, setText] = useState('')

    return (
        <BottomPanel>
            <InputStyled>
                <Form.Control
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="О чем вы сейчас думаете?"
                />
            </InputStyled>
            <Button
                onClick={() => {
                    text && onAdd(text)
                    setText('')
                }}
                variant="outline-secondary">
                Добавить
            </Button>
        </BottomPanel>
    )
}

const BottomPanel = styled.div`
    display: flex;
    margin-top: 20px;
`
const InputStyled = styled.div`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`

export default PostAddForm