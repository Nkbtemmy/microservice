from django.core.mail import send_mail
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response


class EmailView(APIView):
    def post(self, request):
        subject = request.data.get('subject')
        message = request.data.get('message')
        recipient_list = request.data.get('recipient_list')
        from_email = 'your-email@example.com'

        send_mail(subject, message, from_email, recipient_list)

        return Response({'message': 'Email sent successfully'})
# def send_email_view(request):
        
#         subject = request.data.get('subject')
#         message = request.data.get('message')
#         recipient_list = request.data.get('recipient_list')
#         from_email = 'your-email@example.com'

#         send_mail(subject, message, from_email, recipient_list)
#     # send_mail(
#     #     'Subject',
#     #     'Message body',
#     #     'from@example.com',
#     #     ['to@example.com'],
#     #     fail_silently=False,
#     # )
#     return HttpResponse('Email sent successfully!')