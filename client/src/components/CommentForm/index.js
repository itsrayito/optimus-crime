import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ caseId }) => {
    const [commentText, setCommentText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(ADD_COMMENT);

        const handleChange = event => {
            if (event.target.value.length <= 280) {
                setCommentText(event.target.value);
                setCharacterCount(event.target.value.length);
            }
        };

        const handleFormSubmit = async event => {
            event.preventDefault();
        
            try {
                await addComment({
                    variables: {commentText, caseId}
                });
                setCommentText('');
                setCharacterCount(0);
            } catch (e) {
                console.error(e);
            }
        };

        return (
                <div className="pt-3">
                    <hr />
                    <h3>Any clue as to what happened..?<br/>Please leave a comment!</h3>
                    <p className={`mt-4 text-end ${characterCount === 280 || error ? 'text-error' : ''}`}>
                        Character Count: {characterCount}/280
                        {error && <span>There seems to be an issue..</span>}
                    </p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-floating mb-3">
                            <textarea
                            className="form-control"
                            placeholder="commentText"
                            value={commentText}
                            name="commentText"
                            id="commentText"
                            onChange={handleChange}>
                            </textarea>
                            <label for="commentText">Leave your thoughts!</label>
                        </div>
                        <div className="d-grid ga-2 d-md-flex justify-content-md-end pt-3">
                            <button className='btn btn-dark btn-primary px-4' type='submit'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
        )
    }

        export default CommentForm;