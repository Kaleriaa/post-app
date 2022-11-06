import React from "react";
import styled from "styled-components";
import './post-list-item.css'

const PostListItem = ({ label, onDelete, onToggleImportant, onToggleLiked, ...props }) => {
    const { like, important } = props

    let classNames = 'app-list-item d-flex justify-content-between'
    if (!important) {
        classNames += ' important'
    }
    if (like) {
        classNames += ' like'
    }

    return (
        <div className={classNames}>
            <span onClick={onToggleLiked} className="app-list-item-label">
                {label}
            </span>
            <ButtonGroupStyled>
                <button
                    onClick={onToggleImportant}
                    className="btn btn-star btn-sm">
                    <i className="fa fa-star" />
                </button>
                <button
                    onClick={onDelete}
                    className="btn btn-trash btn-sm">
                    <i className="fa fa-trash" />
                </button>
                <i className="fa fa-heart" />
            </ButtonGroupStyled>
        </div>
    )
}

const ButtonGroupStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default PostListItem