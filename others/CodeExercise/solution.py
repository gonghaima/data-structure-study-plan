import sys
import requests
from bs4 import BeautifulSoup


def decode_secret_message(url: str) -> None:
    # Fetch the doc as HTML (handle /pub and standard edit URLs)
    if not url.endswith("/pub") and "docs.google.com/document/d/" in url:
        doc_id = url.split("/document/d/")[1].split("/")[0]
        url = f"https://docs.google.com/document/d/{doc_id}/export?format=html"

    rows = BeautifulSoup(requests.get(url).text, "html.parser").find("table").find_all("tr")

    headers = [td.get_text().strip().lower() for td in rows[0].find_all("td")]
    x_col = next(i for i, h in enumerate(headers) if "x" in h)
    y_col = next(i for i, h in enumerate(headers) if "y" in h)
    char_col = next(i for i in range(len(headers)) if i not in (x_col, y_col))

    grid = {}
    for row in rows[1:]:
        cells = row.find_all("td")
        if len(cells) > max(x_col, y_col, char_col):
            x, y, ch = int(cells[x_col].get_text()), int(cells[y_col].get_text()), cells[char_col].get_text().strip()
            if ch:
                grid[(x, y)] = ch

    max_x, max_y = max(x for x, _ in grid), max(y for _, y in grid)
    for y in range(max_y, -1, -1):
        print("".join(grid.get((x, y), " ") for x in range(max_x + 1)))


if __name__ == "__main__":
    decode_secret_message(sys.argv[1])
