// Keep your successful queries in a chinook-queries.sql file.

// Provide a query showing Customers (just their full names, customer ID and country) who are not in the US.

// SELECT firstName, LastName, customerId, country
// FROM Customer
// WHERE Country !=  'USA';




// Provide a query only showing the Customers from Brazil.

// SELECT firstName, LastName, customerId, country
// FROM Customer
// WHERE Country =  'Brazil';
//
//
// Provide a query showing the Invoices of customers who are from Brazil.
// The resultant table should show
// the customer's full name, Invoice ID, Date of the invoice and billing country.

// SELECT customer.firstName, customer.LastName, Invoice.InvoiceId, Invoice.InvoiceDate, Invoice.BillingCountry
// FROM Customer, Invoice
// ON Customer.CustomerId = Invoice.CustomerId
// WHERE Invoice.BillingCountry = 'Brazil';

// Provide a query showing only the Employees who are Sales Agents.

// SELECT firstName, lastName, title FROM Employee
// WHERE Title LIKE 'Sales%';
//
//
// Provide a query showing a unique list of billing countries from the Invoice table.

// SELECT  DISTINCT billingCountry FROM Invoice;

// Provide a query showing the invoices of customers who are from Brazil.

// SELECT * FROM Invoice
// WHERE billingCountry = 'Brazil';



// Provide a query that shows the invoices associated with each sales agent.
// The resultant table should include the Sales Agent's full name.
//
// SELECT employee.FirstName, employee.LastName, * FROM Invoice
// JOIN customer
// ON Invoice.CustomerId = Customer.CustomerId
// JOIN employee
// ON customer.supportrepId = Employee.EmployeeId

// ORDER BY employee.firstname;



// Provide a query that shows the Invoice Total, Customer name, Country and Sale Agent name
// for all invoices and customers.

// SELECT   Invoice.Total AS 'Invoice Total', Customer.firstName, Customer.lastName AS 'Name', Customer.Country AS 'Country', Employee.firstName, Employee.lastName AS 'Employee Name'
// FROM Invoice
// JOIN customer
// ON Invoice.CustomerId = Customer.CustomerId
// JOIN Employee
// ON Customer.SupportRepId = Employee.EmployeeId

// ORDER BY customer.firstname;


// How many Invoices were there in 2009 and 2011?

// SELECT Count(*)  AS 'Total Invoices in 2009 and 2011' FROM Invoice
// WHERE InvoiceDate  LIKE '2009%' OR InvoiceDate LIKE '2011%';


// What are the respective total sales for each of those years?
// SELECT Count(*)  AS 'Total Invoices in 2009 and 2011' FROM Invoice
// WHERE InvoiceDate  LIKE '2009%';

// SELECT Count(*)  AS 'Total Invoices in 2009 and 2011' FROM Invoice
// WHERE InvoiceDate  LIKE '2011%';

// Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for Invoice ID 37.

// SELECT COUNT(InvoiceLine.InvoiceId) AS  '# of Invoices'  FROM InvoiceLine
// WHERE InvoiceLine.InvoiceId = 37;
// Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for each Invoice.
//  HINT: GROUP BY

// SELECT InvoiceLine.InvoiceId AS "Invoice ID" , COUNT(InvoiceLine.InvoiceId) AS  '# of Invoices'  FROM InvoiceLine
// GROUP BY InvoiceLine.InvoiceId;




// Provide a query that includes the track name with each invoice line item.

// SELECT InvoiceLine.InvoiceId AS "Invoice Line ID", track.name as "Track Title"
// FROM InvoiceLine
// JOIN Track
// ON InvoiceLine.TrackId = Track.TrackId;


// Provide a query that includes the purchased track name AND artist name with each invoice line item.

// SELECT InvoiceLine.InvoiceLineId AS "Invoice Id", artist.name as "Artist"
// FROM InvoiceLine
// JOIN Track
// ON InvoiceLine.TrackId = Track.TrackId
// JOIN Album
// ON Track.AlbumId = Album.AlbumId
// JOIN Artist
// ON Album.ArtistId = Artist.ArtistId;

// Provide a query that shows the # of invoices per country. HINT: GROUP BY
// SELECT Invoice.BillingCountry AS "Country", COUNT(Invoice.BillingCountry) FROM Invoice
// GROUP BY Invoice.BillingCountry;


// Provide a query that shows the total number of tracks in each playlist.
// The Playlist name should be include on the resultant table.

// SELECT Playlist.Name, COUNT(PlaylistTrack.TrackId)
// FROM Playlist
// JOIN PlaylistTrack
// ON Playlist.PlaylistId = PlaylistTrack.PlaylistId
// GROUP BY Playlist.Name;



// Provide a query that shows all the Tracks, but displays no IDs.

// SELECT track.name, track.albumid, track.mediatypeid, track.genreid, track.composer, track.bytes,track.unitprice FROM Track;



// The resultant table should include the Album name, Media type and Genre.

// SELECT track.name, Album.Title, track.mediatypeid, Genre.Name, track.composer, track.bytes, track.unitprice FROM Track
// JOIN Album
// ON Track.AlbumId = Album.AlbumId
// JOIN Genre
// ON Track.GenreId = Genre.GenreId;
// Provide a query that shows all Invoices but includes the # of invoice line items.

// SELECT InvoiceLine.InvoiceLineId,   COUNT(InvoiceLine.InvoiceId) AS 'Number of Invoice Items' FROM Invoice
// JOIN InvoiceLine
// ON Invoice.InvoiceId = InvoiceLine.InvoiceId
// GROUP BY Invoice.InvoiceId;
//
//
//



// Provide a query that shows total sales made by each sales agent.


// SELECT InvoiceLine.InvoiceLineId, Employee.firstName, Employee.lastName FROM InvoiceLine
// JOIN Invoice
// ON InvoiceLine.InvoiceId = Invoice.InvoiceId
// JOIN Customer
// ON Invoice.CustomerId = Customer.CustomerId
// JOIN Employee
// ON Customer.SupportRepId = Employee.EmployeeId

// GROUP BY Employee.firstName;




// Which sales agent made the most in sales in 2009?


// SELECT InvoiceLine.InvoiceLineId AS 'Total Sales', Employee.firstName, Employee.lastName FROM InvoiceLine
// JOIN Invoice
// ON InvoiceLine.InvoiceId = Invoice.InvoiceId
// JOIN Customer
// ON Invoice.CustomerId = Customer.CustomerId
// JOIN Employee
// ON Customer.SupportRepId = Employee.EmployeeId
// WHERE Invoice.InvoiceDate LIKE '2009%'
// GROUP BY Employee.FirstName;
//
//

// Which sales agent made the most in sales in 2010?
//  SELECT InvoiceLine.InvoiceLineId AS 'Total Sales', Employee.firstName, Employee.lastName FROM InvoiceLine
// JOIN Invoice
// ON InvoiceLine.InvoiceId = Invoice.InvoiceId
// JOIN Customer
// ON Invoice.CustomerId = Customer.CustomerId
// JOIN Employee
// ON Customer.SupportRepId = Employee.EmployeeId
// WHERE Invoice.InvoiceDate LIKE '2010%'
// GROUP BY Employee.FirstName;



// Which sales agent made the most in sales over all?

// SELECT InvoiceLine.InvoiceLineId AS 'Total Sales', Employee.firstName, Employee.lastName FROM InvoiceLine
// JOIN Invoice
// ON InvoiceLine.InvoiceId = Invoice.InvoiceId
// JOIN Customer
// ON Invoice.CustomerId = Customer.CustomerId
// JOIN Employee
// ON Customer.SupportRepId = Employee.EmployeeId

// GROUP BY Employee.FirstName;

// Provide a query that shows the # of customers assigned to each sales agent.

// SELECT Employee.firstName AS 'First', Employee.lastName AS 'Last', COUNT(Customer.SupportRepId) AS 'Number of Customers' FROM Employee
// JOIN Customer
// ON Employee.Employeeid = Customer.supportRepId
// GROUP BY Employee.firstName;



// Provide a query that shows the total sales per country.

// SELECT InvoiceLine.InvoiceLineId, Invoice.BillingCountry FROM InvoiceLine
// JOIN Invoice
// ON InvoiceLine.InvoiceId = Invoice.InvoiceId
// GROUP BY Invoice.BillingCountry;

// Which country's customers spent the most?
// SELECT InvoiceLine.InvoiceLineId, Invoice.BillingCountry FROM InvoiceLine
// JOIN Invoice
// ON InvoiceLine.InvoiceId = Invoice.InvoiceId
// GROUP BY Invoice.BillingCountry
// ORDER BY InvoiceLine.InvoiceLineId DESC;


// Provide a query that shows the most purchased track of 2013.
// SELECT Track.Name, COUNT(InvoiceLine.TrackId) AS 'Number Sold' FROM InvoiceLine
// JOIN Track
// ON InvoiceLine.TrackId = Track.TrackId
// JOIN Invoice
// ON InvoiceLine.InvoiceId = Invoice.InvoiceId
// WHERE Invoice.BillingDate LIKE '2013%';
// Group BY Track.Name;



// Provide a query that shows the top 5 most purchased tracks over all.
//  SELECT  Track.Name, COUNT(InvoiceLine.TrackId) AS 'Number Sold' FROM InvoiceLine
// JOIN Track
// ON InvoiceLine.TrackId = Track.TrackId

// Group BY Track.Name
// LIMIT 3;

// Provide a query that shows the top 3 best selling artists.
//  SELECT Artist.Name , COUNT(InvoiceLine.TrackId) AS 'Number Sold' FROM InvoiceLine
// LEFT JOIN Track ON InvoiceLine.TrackId = Track.TrackId
// LEFT JOIN Album ON Track.AlbumId = Album.AlbumId
// LEFT JOIN Artist ON Album.ArtistId = Artist.ArtistId
// GROUP BY Artist.Name
// ORDER BY COUNT(InvoiceLine.TrackId) DESC
// LIMIT 3;

// Provide a query that shows the most purchased Media Type.
//  SELECT MediaType.Name , COUNT(InvoiceLine.TrackId) AS 'Number Sold' FROM InvoiceLine
// LEFT JOIN Track ON InvoiceLine.TrackId = Track.TrackId
// LEFT JOIN Album ON Track.AlbumId = Album.AlbumId
// LEFT JOIN Artist ON Album.ArtistId = Artist.ArtistId
// LEFT JOIN MediaType ON Track.MediaTypeId = MediaType.MediaTypeId
// GROUP BY Artist.Name
// ORDER BY COUNT(InvoiceLine.TrackId) DESC
// LIMIT 3;
