class DatabaseAccess {

    protected static instance: DatabaseAccess | null = null;

    private constructor() {}

    static getInstance(): DatabaseAccess {
        if(DatabaseAccess.instance === null) {
            DatabaseAccess.instance = new DatabaseAccess();
        }
        return DatabaseAccess.instance;
    }

    connect():void {
        console.log('Connected to database');
    }
}

const database = DatabaseAccess.getInstance();
database.connect();