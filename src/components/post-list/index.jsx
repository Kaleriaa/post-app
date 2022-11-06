import React from "react";
import styled from "styled-components";
import PostListItem from "../post-list-item";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
	const elements = posts.map((item) => {
		const { id, ...itemProps } = item
		return (
			<ListItemStyled key={id} className='list-group-item'>
				<PostListItem {...itemProps}
					onDelete={() => onDelete(id)}
					onToggleImportant={() => onToggleImportant(id)}
					onToggleLiked={() => onToggleLiked(id)} />
			</ListItemStyled>
		)
	})

	return (
		<AppList>
			{elements}
		</AppList>
	)
}

const AppList = styled.ul`
    margin-top: 50px;
	padding-left: 0;
`
const ListItemStyled = styled.li`
    padding: 20px 35px 10px 35px;
    margin-top: 10px;
	background-color: #fff;
`

export default PostList