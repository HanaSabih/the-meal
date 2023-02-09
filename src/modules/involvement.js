const appLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7P9rWHY7WsKk1rSNM8nF/comments';

export const postComment = async (MealId, name, message) => {
    if(name.value && message.value) {
        await fetch(appLink, {
            method: 'post',
            body: JSON.stringify({
                item_id: MealId,
                username: name.value,
                comment: message.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => console.log(response));
    }
};

export const getComments = async (hostId) => {
    const commentLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7P9rWHY7WsKk1rSNM8nF/comments?item_id=' + hostId;
    const response = await fetch(commentLink);
    const retrieved = await response.json();
    return retrieved;
}