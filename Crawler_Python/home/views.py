from django.shortcuts import render
from django.http import HttpResponse, response
from .form import GiaitoanForm
from jinja2 import Environment, FileSystemLoader

# Create your views here.
def index(request):
    return render(request, 'pages/index.html')

def giaitoanlop6(request):
    return render(request, 'pages/lop6/giaibaitap/baitap.html')

def toan6_chuong1(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/index.html')

def toan6_chuong2(request):
    return render(request, 'pages/lop6/chuong-2-so-nguyen/index.html')

def toan6_chuong3(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/index.html')

def toan7_chuong1(request):
    return render(request, 'pages/lop7/chuong1/index.html')

def toan7_chuong2(request):
    return render(request, 'pages/lop7/chuong2/index.html')   

def toan7_chuong3(request):
    return render(request, 'pages/lop7/chuong3/index.html')

def toan7_chuong4(request):
    return render(request, 'pages/lop7/chuong4/index.html')

def toan8_chuong1(request):
    return render(request, 'pages/lop8/chuong1/index.html')

def toan8_chuong2(request):
    return render(request, 'pages/lop8/chuong2/index.html')

def toan8_chuong3(request):
    return render(request, 'pages/lop8/chuong3/index.html')

def toan8_chuong4(request):
    return render(request, 'pages/lop8/chuong4/index.html')

def toan9_chuong1(request):
    return render(request, 'pages/lop9/chuong1/index.html')

def toan9_chuong2(request):
    return render(request, 'pages/lop9/chuong2/index.html')

def toan9_chuong3(request):
    return render(request, 'pages/lop9/chuong3/index.html')

def toan9_chuong4(request):
    return render(request, 'pages/lop9/chuong4/index.html')

def toan6_chuong1_bai1(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (1).html')

def toan6_chuong1_bai2(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (2).html')

def toan6_chuong1_bai3(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (3).html')
    

def toan6_chuong1_bai4(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (4).html')

def toan6_chuong1_bai5(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (5).html')

def toan6_chuong1_bai6(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (6).html')

def toan6_chuong1_bai7(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (7).html')

def toan6_chuong1_bai8(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (8).html')

def toan6_chuong1_bai9(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (9).html')

def toan6_chuong1_bai10(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (10).html')

def toan6_chuong1_bai11(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (11).html')

def toan6_chuong1_bai12(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (12).html')

def toan6_chuong1_bai13(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (13).html')

def toan6_chuong1_bai14(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (14).html')

def toan6_chuong1_bai15(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (15).html')

def toan6_chuong1_bai16(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (16).html')

def toan6_chuong1_bai17(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (17).html')

def toan6_chuong1_bai18(request):
    return render(request, 'pages/lop6/chuong-1-on-tap-va-bo-tuc-ve-so-tu-nhien/bai (18).html')

def toan6_chuong2_bai1(request):
    return render(request, 'pages/lop6/chuong-2-so-nguyen/bai (1).html')
def toan6_chuong2_bai2(request):
    return render(request, 'pages/lop6/chuong-2-so-nguyen/bai (2).html')
def toan6_chuong2_bai3(request):
    return render(request, 'pages/lop6/chuong-2-so-nguyen/bai (3).html')
def toan6_chuong2_bai4(request):
    return render(request, 'pages/lop6/chuong-2-so-nguyen/bai (4).html')
def toan6_chuong2_bai5(request):
    return render(request, 'pages/lop6/chuong-2-so-nguyen/bai (5).html')
def toan6_chuong2_bai6(request):
    return render(request, 'pages/lop6/chuong-2-so-nguyen/bai (6).html')
def toan6_chuong2_bai7(request):
    return render(request, 'pages/lop6/chuong-2-so-nguyen/bai (7).html')
def toan6_chuong2_bai8(request):
    return render(request, 'pages/lop6/chuong-2-so-nguyen/bai (8).html')
def toan6_chuong2_bai9(request):
    return render(request, 'pages/lop6/chuong-2-so-nguyen/bai (9).html')
def toan6_chuong2_bai10(request):
    return render(request, 'pages/lop6/chuong-2-so-nguyen/bai (10).html')
def toan6_chuong2_bai11(request):
    return render(request, 'pages/lop6/chuong-2-so-nguyen/bai (11).html')
def toan6_chuong2_bai12(request):
    return render(request, 'pages/lop6/chuong-2-so-nguyen/bai (12).html')
def toan6_chuong2_bai13(request):
    return render(request, 'pages/lop6/chuong-2-so-nguyen/bai (13).html')


def toan6_chuong3_bai1(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (1).html')

def toan6_chuong3_bai2(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (2).html')

def toan6_chuong3_bai3(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (3).html')

def toan6_chuong3_bai4(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (4).html')

def toan6_chuong3_bai5(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (5).html')

def toan6_chuong3_bai6(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (6).html')

def toan6_chuong3_bai7(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (7).html')

def toan6_chuong3_bai8(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (8).html')

def toan6_chuong3_bai9(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (9).html')

def toan6_chuong3_bai10(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (10).html')

def toan6_chuong3_bai11(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (11).html')

def toan6_chuong3_bai12(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (12).html')

def toan6_chuong3_bai13(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (13).html')

def toan6_chuong3_bai14(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (14).html')

def toan6_chuong3_bai15(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (15).html')

def toan6_chuong3_bai16(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (16).html')

def toan6_chuong3_bai17(request):
    return render(request, 'pages/lop6/chuong-3-phan-so/bai (17).html')

def toan7_chuong1_bai1(request):
    return render(request, 'pages/lop7/chuong1/bai (1).html')

def toan7_chuong1_bai2(request):
    return render(request, 'pages/lop7/chuong1/bai (2).html')

def toan7_chuong1_bai3(request):
    return render(request, 'pages/lop7/chuong1/bai (3).html')

def toan7_chuong1_bai4(request):
    return render(request, 'pages/lop7/chuong1/bai (4).html')

def toan7_chuong1_bai5(request):
    return render(request, 'pages/lop7/chuong1/bai (5).html')

def toan7_chuong1_bai6(request):
    return render(request, 'pages/lop7/chuong1/bai (6).html')

def toan7_chuong1_bai7(request):
    return render(request, 'pages/lop7/chuong1/bai (7).html')

def toan7_chuong1_bai8(request):
    return render(request, 'pages/lop7/chuong1/bai (8).html')

def toan7_chuong1_bai9(request):
    return render(request, 'pages/lop7/chuong1/bai (9).html')

def toan7_chuong1_bai10(request):
    return render(request, 'pages/lop7/chuong1/bai (10).html')

def toan7_chuong1_bai11(request):
    return render(request, 'pages/lop7/chuong1/bai (11).html')

def toan7_chuong1_bai12(request):
    return render(request, 'pages/lop7/chuong1/bai (12).html')

def toan7_chuong2_bai1(request):
    return render(request, 'pages/lop7/chuong2/bai (1).html')

def toan7_chuong2_bai2(request):
    return render(request, 'pages/lop7/chuong2/bai (2).html')

def toan7_chuong2_bai3(request):
    return render(request, 'pages/lop7/chuong2/bai (3).html')

def toan7_chuong2_bai4(request):
    return render(request, 'pages/lop7/chuong2/bai (4).html')

def toan7_chuong2_bai5(request):
    return render(request, 'pages/lop7/chuong2/bai (5).html')

def toan7_chuong2_bai6(request):
    return render(request, 'pages/lop7/chuong2/bai (6).html')

def toan7_chuong2_bai7(request):
    return render(request, 'pages/lop7/chuong2/bai (7).html')

def toan7_chuong3_bai1(request):
    return render(request, 'pages/lop7/chuong3/bai (1).html')

def toan7_chuong3_bai2(request):
    return render(request, 'pages/lop7/chuong3/bai (2).html')

def toan7_chuong3_bai3(request):
    return render(request, 'pages/lop7/chuong3/bai (3).html')

def toan7_chuong3_bai4(request):
    return render(request, 'pages/lop7/chuong3/bai (4).html')

def toan7_chuong4_bai1(request):
    return render(request, 'pages/lop7/chuong4/bai (1).html')

def toan7_chuong4_bai2(request):
    return render(request, 'pages/lop7/chuong4/bai (2).html')

def toan7_chuong4_bai3(request):
    return render(request, 'pages/lop7/chuong4/bai (3).html')

def toan7_chuong4_bai4(request):
    return render(request, 'pages/lop7/chuong4/bai (4).html')

def toan7_chuong4_bai5(request):
    return render(request, 'pages/lop7/chuong4/bai (5).html')

def toan7_chuong4_bai6(request):
    return render(request, 'pages/lop7/chuong4/bai (6).html')

def toan7_chuong4_bai7(request):
    return render(request, 'pages/lop7/chuong4/bai (7).html')

def toan7_chuong4_bai8(request):
    return render(request, 'pages/lop7/chuong4/bai (8).html')

def toan7_chuong4_bai9(request):
    return render(request, 'pages/lop7/chuong4/bai (9).html')

def toan8_chuong1_bai1(request):
    return render(request, 'pages/lop8/chuong1/bai (1).html')

def toan8_chuong1_bai2(request):
    return render(request, 'pages/lop8/chuong1/bai (2).html')

def toan8_chuong1_bai3(request):
    return render(request, 'pages/lop8/chuong1/bai (3).html')

def toan8_chuong1_bai4(request):
    return render(request, 'pages/lop8/chuong1/bai (4).html')

def toan8_chuong1_bai5(request):
    return render(request, 'pages/lop8/chuong1/bai (5).html')

def toan8_chuong1_bai6(request):
    return render(request, 'pages/lop8/chuong1/bai (6).html')

def toan8_chuong1_bai7(request):
    return render(request, 'pages/lop8/chuong1/bai (7).html')

def toan8_chuong1_bai8(request):
    return render(request, 'pages/lop8/chuong1/bai (8).html')

def toan8_chuong1_bai9(request):
    return render(request, 'pages/lop8/chuong1/bai (9).html')

def toan8_chuong1_bai10(request):
    return render(request, 'pages/lop8/chuong1/bai (10).html')

def toan8_chuong1_bai11(request):
    return render(request, 'pages/lop8/chuong1/bai (11).html')

def toan8_chuong1_bai12(request):
    return render(request, 'pages/lop8/chuong1/bai (12).html')

def toan8_chuong2_bai1(request):
    return render(request, 'pages/lop8/chuong2/bai (1).html')

def toan8_chuong2_bai2(request):
    return render(request, 'pages/lop8/chuong2/bai (2).html')

def toan8_chuong2_bai3(request):
    return render(request, 'pages/lop8/chuong2/bai (3).html')

def toan8_chuong2_bai4(request):
    return render(request, 'pages/lop8/chuong2/bai (4).html')

def toan8_chuong2_bai5(request):
    return render(request, 'pages/lop8/chuong2/bai (5).html')

def toan8_chuong2_bai6(request):
    return render(request, 'pages/lop8/chuong2/bai (6).html')

def toan8_chuong2_bai7(request):
    return render(request, 'pages/lop8/chuong2/bai (7).html')

def toan8_chuong2_bai8(request):
    return render(request, 'pages/lop8/chuong2/bai (8).html')

def toan8_chuong2_bai9(request):
    return render(request, 'pages/lop8/chuong2/bai (9).html')

def toan8_chuong3_bai1(request):
    return render(request, 'pages/lop8/chuong3/bai (1).html')

def toan8_chuong3_bai2(request):
    return render(request, 'pages/lop8/chuong3/bai (2).html')

def toan8_chuong3_bai3(request):
    return render(request, 'pages/lop8/chuong3/bai (3).html')

def toan8_chuong3_bai4(request):
    return render(request, 'pages/lop8/chuong3/bai (4).html')

def toan8_chuong3_bai5(request):
    return render(request, 'pages/lop8/chuong3/bai (5).html')

def toan8_chuong3_bai6(request):
    return render(request, 'pages/lop8/chuong3/bai (6).html')

def toan8_chuong3_bai7(request):
    return render(request, 'pages/lop8/chuong3/bai (7).html')

def toan8_chuong4_bai1(request):
    return render(request, 'pages/lop8/chuong4/bai (1).html')

def toan8_chuong4_bai2(request):
    return render(request, 'pages/lop8/chuong4/bai (2).html')

def toan8_chuong4_bai3(request):
    return render(request, 'pages/lop8/chuong4/bai (3).html')

def toan8_chuong4_bai4(request):
    return render(request, 'pages/lop8/chuong4/bai (4).html')

def toan8_chuong4_bai5(request):
    return render(request, 'pages/lop8/chuong4/bai (5).html')

def toan9_chuong1_bai1(request):
    return render(request, 'pages/lop9/chuong1/bai (1).html')

def toan9_chuong1_bai2(request):
    return render(request, 'pages/lop9/chuong1/bai (2).html')

def toan9_chuong1_bai3(request):
    return render(request, 'pages/lop9/chuong1/bai (3).html')

def toan9_chuong1_bai4(request):
    return render(request, 'pages/lop9/chuong1/bai (4).html')

def toan9_chuong1_bai5(request):
    return render(request, 'pages/lop9/chuong1/bai (5).html')

def toan9_chuong1_bai6(request):
    return render(request, 'pages/lop9/chuong1/bai (6).html')

def toan9_chuong1_bai7(request):
    return render(request, 'pages/lop9/chuong1/bai (7).html')

def toan9_chuong1_bai8(request):
    return render(request, 'pages/lop9/chuong1/bai (8).html')

def toan9_chuong2_bai1(request):
    return render(request, 'pages/lop9/chuong2/bai (1).html')

def toan9_chuong2_bai2(request):
    return render(request, 'pages/lop9/chuong2/bai (2).html')

def toan9_chuong2_bai3(request):
    return render(request, 'pages/lop9/chuong2/bai (3).html')

def toan9_chuong2_bai4(request):
    return render(request, 'pages/lop9/chuong2/bai (4).html')

def toan9_chuong2_bai5(request):
    return render(request, 'pages/lop9/chuong2/bai (5).html')

def toan9_chuong3_bai1(request):
    return render(request, 'pages/lop9/chuong3/bai (1).html')

def toan9_chuong3_bai2(request):
    return render(request, 'pages/lop9/chuong3/bai (2).html')

def toan9_chuong3_bai3(request):
    return render(request, 'pages/lop9/chuong3/bai (3).html')

def toan9_chuong3_bai4(request):
    return render(request, 'pages/lop9/chuong3/bai (4).html')

def toan9_chuong3_bai5(request):
    return render(request, 'pages/lop9/chuong3/bai (5).html')

def toan9_chuong3_bai6(request):
    return render(request, 'pages/lop9/chuong3/bai (6).html')

def toan9_chuong4_bai1(request):
    return render(request, 'pages/lop9/chuong4/bai (1).html')

def toan9_chuong4_bai2(request):
    return render(request, 'pages/lop9/chuong4/bai (2).html')

def toan9_chuong4_bai3(request):
    return render(request, 'pages/lop9/chuong4/bai (3).html')

def toan9_chuong4_bai4(request):
    return render(request, 'pages/lop9/chuong4/bai (4).html')

def toan9_chuong4_bai5(request):
    return render(request, 'pages/lop9/chuong4/bai (5).html')

def toan9_chuong4_bai6(request):
    return render(request, 'pages/lop9/chuong4/bai (6).html')

def toan9_chuong4_bai7(request):
    return render(request, 'pages/lop9/chuong4/bai (7).html')

def toan9_chuong4_bai8(request):
    return render(request, 'pages/lop9/chuong4/bai (8).html')

def giaitoan(request):
    form=GiaitoanForm()
    if request.method == 'GET':
        form = GiaitoanForm(request.POST)
        file_loader = FileSystemLoader('home/templates/pages/Giaitoan_API')
        env = Environment(loader=file_loader)
        template = env.get_template('giaitoan.html')
        answer = form.giaitoan()
        output = template.render(answer = answer)
        return render(request,'pages/Giaitoan_API/giaitoan.html',{'form': form,'answer':output})
    return render(request,'pages/Giaitoan_API/giaitoan.html',{'form': form})
