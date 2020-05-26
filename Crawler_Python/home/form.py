from django import forms
import requests


class GiaitoanForm(forms.Form):
    q = forms.CharField(max_length=30)

    def giaitoan(self):
        query = self.cleaned_data['q'].replace(" ", "")
        headers = {
            "DNT": "1",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.42 Safari/537.36",
            "Accept": "*/*",
            "Referer": "https://www.cymath.com/answer?q={}".format(q),
            "Connection": "keep-alive",
        }
        params = {
            "q": q,
        }
        r = requests.get("https://www.cymath.com/answer", params=params)

        cookies = {
            "PHPSESSID": r.headers["Set-Cookie"].split("=")[1].split(";")[0],
        }

        params["lang"] = "en"

        response = requests.get("https://www.cymath.com/ajax/get_steps.php",
                                headers=headers, params=params, cookies=cookies)
        answer = response.text
        return answer
