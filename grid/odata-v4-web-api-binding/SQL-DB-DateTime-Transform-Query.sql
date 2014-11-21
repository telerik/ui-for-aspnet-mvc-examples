
CREATE FUNCTION fn_DSTOffset( @date1 DATETIMEOFFSET )
RETURNS INT
AS
BEGIN
RETURN
CASE WHEN ( ( @date1 > '2009-3-29 2:00' AND @date1 <= '2009-10-25 2:00' )
    OR ( @date1 > '2010-3-28 2:00' AND @date1 <= '2010-10-31 2:00' )
    OR ( @date1 > '2011-3-27 2:00' AND @date1 <= '2011-10-30 2:00' ) )
    THEN 60 -- offset in minutes
    ELSE 0
    END
END
GO

ALTER TABLE Employees DROP CONSTRAINT CK_Birthdate;

ALTER TABLE Employees ALTER COLUMN HireDate DATETIMEOFFSET NOT NULL;
GO
DECLARE @baseoffset INT;
SET @baseoffset = 60; -- UTC +1 = 60 minutes
UPDATE Employees SET
   HireDate =SWITCHOFFSET(HireDate, @baseoffset + dbo.fn_DSTOffset( HireDate ) );
GO