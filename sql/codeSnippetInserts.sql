INSERT INTO codeSnippets (object_ID, code, FK_user, FK_language, entryDate, description)
VALUES
(
    'codea-testa-testa-testa',
    'function getUrlVars()
    {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf(\'?\') + 1).split(\'&\');

    for(var i = 0; i < hashes.length; i++)
    {
    hash = hashes[i].split(\'=\');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
    }

    return vars;
    }',
    'testa-testa-testa-testa',
    'Javascript',
    NOW(),
    'This is some javascript.'),
(
    'codeb-testb-testb-testb',
    'define("db_server","localhost");
    define("db_user","root");
    define("db_password","root");

    class mysql

    {
    var $conn;
    var $error;

    function get_error() {
    return $this->error;
    }',
    'testa-testa-testa-testa',
    'PHP',
    NOW(),
    'This is some PHP.')
