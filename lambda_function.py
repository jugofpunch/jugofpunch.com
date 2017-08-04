import os
import elasticsearch

def lambda_handler(event, context):
    esURL = os.environ['esURL']
    es = elasticsearch.Elasticsearch([esURL])
    res = es.search(index="booze", body={"query":{
        "match_all": {}
        }})
    return res
