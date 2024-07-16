# THE TEMPLATE

```
+-----------+       +-----------+       +-----------+       +-----------+       +-----------+
|   User    |       |   Movie   |       |  Review   |       | Watchlist |       |   Role    |
+-----------+       +-----------+       +-----------+       +-----------+       +-----------+
| user_id   |-------| movie_id  |-------| review_id |-------| watchlist_id |-----| role_id   |
| username  |       | title     |       | user_id   |       | user_id       |     | role_name |
| email     |       | description|      | movie_id  |       | movie_id      |     +-----------+
| password  |       | genre     |       | rating    |       +-------------+
| role_id   |-------| release_date|     | comment   |
+-----------+       | director  |       | review_date|
                    | cast      |       +-----------+
                    | file_path |
                    +-----------+
```


## Description
- User Entity: Stores information about the users, including user_id, username, email, password, and role_id. Each user is associated with one role.
- Movie Entity: Stores information about the movies, including movie_id, title, description, genre, release_date, director, cast, and file_path.
- Review Entity: Stores user reviews for movies, including review_id, user_id, movie_id, rating, comment, and review_date. Each review is associated with one user and one movie.
- Watchlist Entity: Stores information about the movies that users have added to their watchlist, including watchlist_id, user_id, and movie_id.
Role Entity: Stores information about user roles, including role_id and role_name.

## Relationships
- A User can have many Reviews.
- A User can have many Movies in their Watchlist.
- A Movie can have many Reviews.
- A User can have one Role.