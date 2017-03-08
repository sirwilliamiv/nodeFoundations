-- SELECT a.Title, s.Title FROM Album a LEFT JOIN Song s ON s.AlbumId = a.AlbumId;
-- SELECT a.Title, s.Title FROM Song s LEFT JOIN Album a ON s.AlbumId = a.AlbumId;

-- Query all of the entries in the Genre table




-- Query all of the entries in the Genre table

SELECT Label FROM Genre

-- Using the INSERT statement, add one of your favorite artists to the Artist table.

INSERT INTO Artist(ArtistName, YearEstablished) VALUES ("Mehliana", 2012)


CREATE TABLE `Album` ( `AlbumId` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  `Title` TEXT NOT NULL,

  `ReleaseDate` TEXT NOT NULL,
  `AlbumLength` INTEGER NOT NULL,
  `Label` TEXT NOT NULL,
  `ArtistId` INTEGER NOT NULL, `GenreId` INTEGER,
  FOREIGN KEY(`ArtistId`)
  REFERENCES `Artist`(`ArtistId`),
   FOREIGN KEY(`GenreId`) REFERENCES `Genre`(`GenreId`) )
-- Using the INSERT statement, add one, or more, albums by your artist to the Album table.

INSERT INTO Album(Title, ReleaseDate, AlbumLength, Label, ArtistId)  VALUES ("taming the dragon", 2012, 134,'nonesuch', 29,4)

INSERT INTO Album(Title, ReleaseDate, AlbumLength, Label, ArtistId)  VALUES ("taming the dragon", 2012, 134,'nonesuch', (SELECT artistid FROM artist WHERE artistname = 'Mehliana'), (SELECT GenreId FROM genre WHERE label = 'latin'))


Album title, length, label, artist id, artist, genre



-- Using the INSERT statement, add some songs that are on that album to the Song table.

INSERT INTO Song(Title, SongLength, ReleaseDate, GenreId, ArtistId,AlbumId) VALUES('dreamer', 342, 2012,4,29,24)

-- Write a SELECT query that provides the
-- song titles,
--  album title,
--  and artist name
--  for all of the data you just entered in.
-- Use the LEFT JOIN keyword sequence to connect the tables,
--  and
--  the WHERE keyword to filter the results
--  to the album and
--  artist you added.
--  Here is some more info on joins that might help.

 SELECT * FROM Artist
 JOIN Album
 ON Artist.ArtistId = Album.ArtistId
 JOIN Song ON  Artist.ArtistId = Song.ArtistId;
  WHERE Artist.ArtistName = 'Mehliana'

   SELECT ____ FROM _____\
  JOIN _____ ON ____
  WHERE ____

  Joe Shepherd [1:43 PM]
Nifty tip for inserting id's: When creating the table use `id INTEGER PRIMARY KEY`.
This will create/auto-increment an id # for you if you pass in `null` when adding records.
`INSERT INTO employees VALUES (null, "${firstName}", "${lastName}")` (

-- Reminder: Direction of join matters. Try the following statements and see the difference in results.
-- SELECT a.Title, s.Title FROM Album a LEFT JOIN Song s ON s.AlbumId = a.AlbumId;
-- SELECT a.Title, s.Title FROM Song s LEFT JOIN Album a ON s.AlbumId = a.AlbumId;

SELECT COUNT(Song.Name) AS Number_o_Songs, Artist.ArtistName AS AName
FROM Song
JOIN Artist
ON Song.ArtistId = Artist.ArtistId
WHERE Song.ArtistId = Artist.ArtistId;
 -- Write a SELECT statement to display how many songs exist for each artist.
 -- You'll need to use the COUNT() function and the GROUP BY keyword sequence.
SELECT COUNT(*)  AS Number_Mehliana_Songs FROM Song
WHERE Song.ArtistId =  29;

SELECT COUNT(*), Artist.ArtistName FROM Song
JOIN Artist
ON Song.ArtistId = Artist.ArtistId
GROUP BY Artist.ArtistName;
-- Write a SELECT statement to display how many songs exist for each genre.
SELECT COUNT(*), Genre.Label FROM Song
JOIN Artist
ON Song.ArtistId = Artist.ArtistId
JOIN Genre
ON Song.GenreId = Genre.GenreId
GROUP BY Genre.Label;

-- Using MAX() function, write a select statement to find the album with the longest duration.
SELECT Album.Title AS Album_Title, MAX( Album.AlbumLength) AS Album_Length

FROM Album;

-- The result should display the album title and the duration.
-- Using MAX() function, write a select statement to find the song with the longest duration.
SELECT Song.Title AS Song_Title, MAX( Song.SongLength) AS Song_Length

FROM Song;
-- The result should display the song title and the duration.
-- Modify the previous query to also display the title of the album.
SELECT Song.Title AS Song_Title,
MAX( Song.SongLength) AS Song_Length,
Album.Title AS album
FROM Song
JOIN Album
ON Song.AlbumId = Album.AlbumId;
