class apiResponse {
    constructor(
        statusCode, data, message = "success"
    ){
        super(statusCode)
        this.statusCode = statusCode
        this.data = data
        this.success = statusCode < 400
    }
}