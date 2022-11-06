import React from 'react';
import AppHeader from '../app-header';
import PostAddForm from '../post-add-form';
import PostList from '../post-list';
import PostFilter from '../post-status-filter';
import SearchPanel from '../search-panel';
import styled from 'styled-components'
import { useState } from 'react';
import generateId from '../../lib/generate-id';
import { useEffect } from 'react';

const defaultData = [
    { label: 'Никита самый лучший парень', important: false, like: false, id: 'dkdjyt' },
    { label: 'Nikita lox', important: false, like: false, id: 'pfpfpo' },
    { label: 'Nikita gay', important: true, like: false, id: 'njvbjf' }
]

const getStorageData = () => JSON.parse(localStorage.getItem('posts'))

const App = () => {
    const [data, setData] = useState([])
    const [term, setTerm] = useState('')
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        data.length && localStorage.setItem('posts', JSON.stringify(data))
    }, [data])
    useEffect(() => {
        const storageData = getStorageData()
        setData(storageData?.length ? storageData : defaultData)
    }, [])

    const deleteItem = (id) => {
        setData((prev) => {
            const index = prev.findIndex((item) => item.id === id)
            return [...prev.slice(0, index), ...prev.slice(index + 1, prev.length)]
        })
    }

    const addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: generateId(6)
        }
        setData((prev) => {
            return [...prev, newItem]
        })
    }

    const onUpdateTerm = (text) => {
        setTerm(text)
    }

    const onUpdateSearchText = (text) => {
        setSearchText(text)
    }

    const searchPost = (items, search) => {
        if (search.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
        })
    }

    const filterPosts = (items, filter) => {
        if (filter === 'like') {
            return items.filter((item) => item.like)
        } else {
            return items
        }
    }

    const onToggleImportant = (id) => {
        setData((prev) => {
            const index = prev.findIndex((item) => item.id === id)
            const oldItem = prev[index]
            const newItem = { ...oldItem, important: !oldItem.important }
            return [...prev.slice(0, index), newItem, ...prev.slice(index + 1, prev.length)]
        })
    }

    const onToggleLiked = (id) => {
        setData((prev) => {
            const index = prev.findIndex((item) => item.id === id)
            const oldItem = prev[index]
            const newItem = { ...oldItem, like: !oldItem.like }
            return [...prev.slice(0, index), newItem, ...prev.slice(index + 1, prev.length)]
        })
    }

    const visiblePosts = searchPost(filterPosts(data, term), searchText)
    const liked = data.filter((item) => item.like).length
    const allPosts = data.length

    return (
        <AppStyled>
            <AppHeader
                liked={liked}
                allPosts={allPosts} />
            <SearchPanelStyled>
                <SearchPanel onUpdateTerm={onUpdateSearchText} />
                <PostFilter filter={term} onUpdateFilter={onUpdateTerm} />
            </SearchPanelStyled>
            <PostList posts={visiblePosts}
                onDelete={deleteItem}
                onToggleImportant={onToggleImportant}
                onToggleLiked={onToggleLiked} />
            <PostAddForm onAdd={addItem} />
        </AppStyled>
    );
}

const AppStyled = styled.div`
    margin: 0 auto;
    max-width: 800px;
`
const SearchPanelStyled = styled.div`
    display: flex;
    margin: 1rem 0;
`

export default App