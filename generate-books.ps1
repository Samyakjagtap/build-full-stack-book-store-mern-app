$books = @(
  @{_id="1"; title="How to Grow Your Online Store"; description="Learn the best strategies to grow your online store in today's competitive market."; category="business"; trending=$true; coverImage="book-1.png"; oldPrice=499; newPrice=299},
  @{_id="2"; title="Top 10 Books This Year"; description="A curated list of the best books that are trending this year."; category="books"; trending=$true; coverImage="book-2.png"; oldPrice=249; newPrice=149},
  @{_id="3"; title="Mastering SEO in 2025"; description="Tips and tricks to boost your SEO and rank higher on search engines."; category="marketing"; trending=$true; coverImage="book-3.png"; oldPrice=399; newPrice=299},
  @{_id="4"; title="Best eCommerce Platforms"; description="A comprehensive guide on choosing the best eCommerce platforms for 2025."; category="business"; trending=$false; coverImage="book-4.png"; oldPrice=499; newPrice=399},
  @{_id="5"; title="Non-Fiction Reads You Must Try"; description="Our top picks for non-fiction books to add to your reading list."; category="books"; trending=$true; coverImage="book-5.png"; oldPrice=299; newPrice=199}
)

$json = $books | ConvertTo-Json -Depth 10
$json | Out-File -FilePath "books.json" -Encoding UTF8 -NoNewline
Write-Host "Created books.json with $($books.Count) books"