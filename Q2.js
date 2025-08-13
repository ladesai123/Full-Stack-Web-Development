function extractUserPosts(apiResponse){
    return apiResponse.map(user => {
        const {id: userId, name: userName, posts} = user;
        const postTitles = posts.map(posts => posts.title).join(',');

        return {userId, userName, postTitles};

    });

}

const apiResponse = [{
    id: 1, 
    name: 'SaiTeja',
    posts: [
        {title:'Hello Lohit', context: "This is a welcome msg",},
        {title:'Hello Hari', context: "This is welcome msg for Hari",}
    ]
    },{
    id : 2, 
    name : 'Lohit',
    posts: [
        {title: 'Hello Sai', context: 'This is a welcome msg',},
        {title: 'Hello Hari', context: 'This is a welcome msg',}
    ]
    }];

    console.log(extractUserPosts(apiResponse));