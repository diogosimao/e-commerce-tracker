FROM python:3.5

ADD requirements.txt /requirements.txt
RUN pip3 install -r requirements.txt

WORKDIR /src
EXPOSE 8000
ENTRYPOINT ["python3", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]