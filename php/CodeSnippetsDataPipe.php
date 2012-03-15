<?php

/**********************************************************
 *  Post for this data pipe with:
 *     {
            "pipe" : "codeSnippets",
 *          "queryType" : "select",
 *          "tableName" : "codeSnippets",
 *          "code" : "%"
 *      }
 **********************************************************/
class CodeSnippetsDataPipe extends BaseDataPipe {

    protected $snippet;

    function __construct($tableMapManager, $dataManager) {
        parent::__construct($tableMapManager, $dataManager);
        $this->snippet = $_REQUEST['code'];       
    }

    function where() {
        return "WHERE code LIKE '".$this->snippet."'";
    }

}

