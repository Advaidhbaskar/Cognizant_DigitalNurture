DECLARE
    CURSOR cust_cursor IS
        SELECT CustomerID, Age, LoanInterestRate
        FROM Customers;

BEGIN
    FOR cust IN cust_cursor LOOP

        IF cust.Age > 60 THEN
            UPDATE Customers
            SET LoanInterestRate = LoanInterestRate - 1
            WHERE CustomerID = cust.CustomerID;
        END IF;

    END LOOP;

    COMMIT;
END;
/


DECLARE
    CURSOR cust_cursor IS
        SELECT CustomerID, Balance
        FROM Customers;

BEGIN
    FOR cust IN cust_cursor LOOP

        IF cust.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;
        END IF;

    END LOOP;

    COMMIT;
END;
/


DECLARE
    CURSOR loan_cursor IS
        SELECT CustomerID,
               LoanID,
               DueDate
        FROM Loans
        WHERE DueDate <= SYSDATE + 30;

BEGIN

    FOR loan IN loan_cursor LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer '
            || loan.CustomerID
            || ' Loan '
            || loan.LoanID
            || ' due on '
            || loan.DueDate
        );

    END LOOP;

END;
/