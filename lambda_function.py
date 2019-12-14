import os
import elasticsearch
import boto3


def lambda_handler(event, context):
    def get_secret():
        secret_name = "prod/esURL"
        region_name = "us-east-1"
        session = boto3.session.Session()
        client = session.client(
            service_name = "secretsmanager",
            region_name = "us-east-1"
            )
        try:
            get_secret_value_response = client.get_secret_value(
                SecretId "prod/esURL"
                )
        except Exception as e:
            print(e)
        secret_es_url = get_secret_value_response["SecureString"]
        return secret_es_url
    
    #esURL = os.environ['esURL']
    esURL = get_secret()
    es = elasticsearch.Elasticsearch([esURL])
    res = es.search(index="booze", body={"query":{
        "match_all": {}
        }})
    return res
