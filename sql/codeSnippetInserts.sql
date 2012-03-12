INSERT INTO codeSnippets (object_ID, code, FK_user, FK_language, entryDate, description)
VALUES
(
    'codea-testa-testa-testa',
    'puts "hello world"',
    'testa-testa-testa-testa',
    'Ruby',
    NOW(),
    'This is some ruby.'),
(
    'codeb-testb-testb-testb',
    'echo "hello world";',
    'testa-testa-testa-testa',
    'PHP',
    NOW(),
    'This is some PHP.'),
(
    'codec-testc-testc-testc',
    'print("hello world")',
    'testa-testa-testa-testa',
    'Python',
    NOW(),
    'This is some Python.');
