import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material'

import Post from "./Post/Post"
import useStyles from "./styles"
const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts)
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.map((post) => (
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}></Post>
                    </Grid>
                ))}
            </Grid>
        )
    )
}
export default Posts