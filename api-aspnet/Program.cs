using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options =>
{
    options.AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin();
});

app.MapGet(string.Empty, () =>
{
    try
    {
        new MongoClient(app.Configuration.GetConnectionString("mongo"))
            .ListDatabaseNames().ToList();

        return new { Message = "connected" };
    }
    catch (Exception)
    {
        return new { Message = "not connected" };
    }
});

app.Run();
